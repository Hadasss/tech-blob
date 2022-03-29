const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Post, Comment, Like } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ["comment_text"],
      },
    ],
  })
    .then((dbPostData) => {
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TODO add post

// TODO update post

// TODO delete post

module.exports = router;
