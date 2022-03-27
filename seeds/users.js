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
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
