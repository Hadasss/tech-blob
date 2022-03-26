const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

module.exports = Comment;
