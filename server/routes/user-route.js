const userController = require('../controllers/user-controller.js');

module.exports = (app) => {
  app.get('/signup', (req, res, next) => {
    res.render('signup', {name: 'Matt'});
    next();
  });

  app.post('/signup', userController.create);

}
