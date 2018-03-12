const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err,user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },

  function(req, email, password, done) {
    User.findOne({'email': email}, (err, user) {
      if(err) return done(err);
      if(user) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      } else {
        let newUser = User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          user_name: req.body.user_name,
          email: email,
          password: password
        })
        .then(user => done(null, user))
        .catch(error => done(error));
      }
    })
  }

  }));


}
