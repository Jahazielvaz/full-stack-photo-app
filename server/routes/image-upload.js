const image = require('./server/models').Image;
const app = require('../app');
const router = express

module.exports = (app) => {
  app.get('/imageuploads', (req, res) =>{
    res.render('image-upload.ejs');
  });

}
