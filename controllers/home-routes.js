const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment, Like } = require("../models");

router.get("/", (req, res) => {
  Post.findAll()
    .then((dbPostData) => {
      //   const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        id: 1,
        title: "Handlebars Docs",
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
          username: "test_user",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
