let Image = require('../models').Image;


module.exports = {
  createImage (req, res) {
    return Image.create({
      testColumn: req.body.testColumn,
    })
    .then(image => res.send(image))
    .catch(error => res.send(error));
  },
}
