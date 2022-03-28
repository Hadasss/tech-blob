const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Comment, User, Post, Like } = require("../../models");

router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.jaon(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TODO add comment

// TODO update comment

// TODO delete comment

module.exports = router;
