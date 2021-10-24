import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import expressLayouts from 'express-ejs-layouts';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';

import * as dataHandler from './data-handler';
import { ensureAuthenticated, ensureAdmin } from './auth';

require('dotenv').config();

const app = express();

// Initilise Datahandler
dataHandler.init();

// Setup Passport
require('./passport')(passport);

// Express Layouts
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// Setup middlwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Globals
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.public_pages = { // Pages for any user
    home: {
      name: 'Home',
      href: '/',
    },
    competition: {
      name: 'Competition',
      href: '/competition',
    },
    scoreboard: {
      name: 'Scoreboard',
      href: '/scoreboard',
    },
  };
  res.locals.admin_pages = { // Pages for admin accounts
    admin: {
      name: 'Admin Panel',
      href: '/admin',
    },
    submissions: {
      name: 'Submissions',
      href: '/admin/submissions',
    },
    users: {
      name: 'Users',
      href: '/admin/users',
    },
  };
  res.locals.user_pages = { // Pages for logged in users
    profile: {
      name: 'Profile',
      href: '/profile',
    },
    submissions: {
      name: 'Submissions',
      href: '/submissions',
    },
  };
  next();
});

// Setup routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/users'));
app.use('/admin', ensureAuthenticated, ensureAdmin, require('./routes/admin'));

app.all('*', (req: express.Request, res: express.Response) => {
  res.status(404).render('error', {
    title: '404 Error',
    error: {
      status: 404,
      stack: '🥞',
    },
    req,
  });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk`Listening at {blue http://localhost:${port}}`));
