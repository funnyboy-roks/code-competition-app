import express from 'express';
import User from './classes/User';

export const ensureAuthenticated = (
  req: express.Request,
  res: express.Response,
  next: Function,
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  const dest = encodeURI(req.originalUrl);
  return res.redirect(`/login?dest=${dest}`);
};

export const ensureAdmin = (req: express.Request, res: express.Response, next: Function) => {
  if (req.isAuthenticated() && (req.user as User).admin) {
    return next();
  }
  return res.redirect('/');
};

export const signedInRedirect = (redirect: string = '/') => (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.isAuthenticated()) {
    return res.redirect(redirect);
  }
  return next();
};
