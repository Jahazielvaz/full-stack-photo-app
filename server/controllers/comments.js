let Comments = require('../models').Comments;

module.exports = {
  createComment (req, res) {
    return Comments.create({
      content: req.body.comments
    })
    .then(comment => res.send(comment))
    .catch(error => res.send(error));
  },
}
