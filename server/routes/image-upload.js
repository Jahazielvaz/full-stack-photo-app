const Image = require('../controllers/image.js');


module.exports = (app) => {
  app.get('/imageuploads', (req, res, next) =>{
    res.render('image-upload.ejs');
    next();
  });

  app.post('/imageuploads', Image.createImage);

}
