import express from 'express';

export const ensureAuthenticated = (
  req: express.Request,
  res: express.Response,
  next: Function,
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
};

export default {};
