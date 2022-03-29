const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment, Like } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "title",
      "post_text",
      "created_at",
      // [
      //   sequelize.literal(
      //     `SELECT COUNT (*) FROM posts WHERE post.id = like.post_id`
      //   ),
      //   "liked_posts",
      // ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      console.log(dbPostData[0]);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
