const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Like extends Model {}

module.exports = Like;
