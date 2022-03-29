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

// add comment
router.post("/", (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// TODO update comment

// TODO delete comment

module.exports = router;
