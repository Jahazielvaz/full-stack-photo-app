let Comments = require('../models').Comments;

module.exports = {
  createComment (req, res) {
    return Comments.create({
      comment: req.body.comment,
      user_id: req.body.user_id
    })
    .then(comment => res.send(comment))
    .catch(error => res.send(error));
  },
}
