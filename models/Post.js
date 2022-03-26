const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

module.exports = Post;
