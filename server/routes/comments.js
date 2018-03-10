const Comments = require('../controllers/comments.js');


module.exports = (app) => {
  app.get('/comments', function(req, res, next){
    res.render('comments.ejs');
  });

  app.post('/postComment', Comments.createComment);

}
