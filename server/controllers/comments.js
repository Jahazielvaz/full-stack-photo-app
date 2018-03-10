let Comments = require('../models').Comments;

module.exports = {
  createComment (req, res) {
    return Comments.create({
      content: req.body.content
    })
    .then(content => res.send(content))
    .catch(error => res.send(error));
  },
}
