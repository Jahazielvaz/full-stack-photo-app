const userController = require('../controllers/user-controller.js');

module.exports = (app) => {
  app.get('/signup', (req, res, next) => {
    res.render('signup.ejs', {name: 'Matt'});
    res.cookie('name', 'users').send('cookie set');
    next();
  });

  app.post('/signup', userController.create)

}
