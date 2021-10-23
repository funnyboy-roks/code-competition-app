import express from 'express';
import passport from 'passport';

const router = express.Router();

// /login
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login', req });
});

// /logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/login', (req, res, next) => {
  console.log(req.query);
  passport.authenticate('local', {
    successRedirect: req.query.dest?.toString() || '/',
    failureRedirect: '/login',
    failureFlash: true,
  })(req, res, next);
});

module.exports = router;
