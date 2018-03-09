let Comments = require('../models').Comments;

module.exports = {
  createComment (req, res) {
    return Comments.create({
      content: req.body.content
    });
  }
}

module.exports = Comments;
