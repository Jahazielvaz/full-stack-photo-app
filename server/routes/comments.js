const Comments = require('../controllers/comments.js');
const url = require('../controllers/image.js');

module.exports = (app) => {
  app.get('/comments', function(req, res, next){
    res.render('comments.ejs');
  });
  app.post('/', Comments.createComment, url.createImage)
}
