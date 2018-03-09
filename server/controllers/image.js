let Image = require('../models').Image;


module.exports = {
  createImage (req, res) {
    return Image.create({
      url: req.body.url,
    })
    .then(image => res.send(image))
    .catch(error => res.send(error));
  },
}
