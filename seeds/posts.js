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
      "a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text ldhjsgflsahgvfcalshjcbas;hjfbvajhdsfvgbadl.jhfbfhj sdkjgcfsahjfgs;hd dsbgs.ldh sdvbs.lhjdfgl.s .sdghfvshj .jkxb",
    user_id: 2,
  },
  {
    title: "This is another one of Steve's posts",
    post_text:
      "a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text",
    user_id: 2,
  },
  {
    title: "The weather today",
    post_text:
      "a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text a lot of text",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
