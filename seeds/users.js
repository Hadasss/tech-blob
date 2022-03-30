const User = require("../models/User");

const userData = [
  {
    username: "Shelly",
    email: "shelly@gmail.com",
    password: "shelly",
  },
  {
    username: "Steve",
    email: "steve@gmail.com",
    password: "steve",
  },
  {
    username: "Hadas",
    email: "hadas@gmail.com",
    password: "hadas",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
