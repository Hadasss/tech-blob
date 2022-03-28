const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Post, Comment, Like } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TODO get 1 user

// TODO update user

// TODO add user

// TODO delete user

module.exports = router;
