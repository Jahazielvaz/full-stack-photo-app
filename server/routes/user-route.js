
module.exports = (app, passport) => {

  app.get('/signup', (req, res, next) => {
    res.render('signup', {message: req.flash('signupMessage')});
    next();
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/comments',
    failureRedirect: '/signup',
    failureFlash: true
  }));

}
