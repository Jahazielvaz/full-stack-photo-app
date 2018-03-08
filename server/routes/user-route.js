const userController = require('../models/user-model.js');

module.exports = (app) => {
  app.get('/signup', (req, res, next) => {
    res.render('signup');
  });
}
