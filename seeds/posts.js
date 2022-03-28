const { Post } = require("../models");

const postData = [
  {
    title: "This is the first post",
    post_text: "a lot of text a lot of text a lot of text a lot of text",
    user_id: 1,
  },
  {
    title: "This is Steve's post",
    post_text:
      "a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
