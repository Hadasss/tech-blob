const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "this is a comment text this is a comment text this is a comment text",
    post_id: 1,
  },
  {
    comment_text:
      "this is a completely different comment text this is a completely different comment text this is a completely different comment text",
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
