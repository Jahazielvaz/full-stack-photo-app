const Comments = require('../controllers/comments.js');


module.exports = (app) => {
  app.get('/', function(req, res, next){
    res.render('comments.ejs');
  });
  app.post('/', Comments.createComment);
}
