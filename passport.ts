import { Strategy as LocalStrategy } from 'passport-local';
import { data } from './data-handler';

module.exports = (passport: any) => {
  passport.use(
    new LocalStrategy({}, (username, password, done) => {
      // Match user
      const user = data.getUserByName(username);

      if (!user || password !== user.password) {
        return done(null, false, { message: 'Email or Password incorrect' });
      }
      return done(null, user);
    }),
  );

  passport.serializeUser((user: any, done: Function) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: any, done: Function) => {
    done(null, data.getUserById(id));
  });
};
