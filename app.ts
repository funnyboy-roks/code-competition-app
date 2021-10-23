import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import expressLayouts from 'express-ejs-layouts';
import passport from 'passport';
import session from 'express-session';

import * as dataHandler from './data-handler';
import { ensureAuthenticated } from './auth';

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

// Setup routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/admin', ensureAuthenticated, require('./routes/admin'));

app.all('*', (req: express.Request, res: express.Response) => {
  res.status(404).send({
    message: 'Page not found',
    title: '404 Error',
    error: {
      status: 404,
      stack: '🥞',
    },
  });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk`Listening at {blue http://localhost:${port}}`));
