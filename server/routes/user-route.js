const userController = require('../controllers/user-controller.js');

module.exports = (app) => {
  app.get('/signup', (req, res, next) => {
    res.render('signup');
    next();
  });

  app.post('/signup', userController.create)

}
