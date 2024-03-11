
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//Models
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3");
const Todo = sequelize.define("todos", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    defaultValue: "default",
  },
  description: DataTypes.TEXT,
  priority: {
    type: DataTypes.TINYINT,
    allowNull: false,
    default: 0,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
sequelize.sync();

sequelize
  .authenticate()
  .then(() => console.log("bağlandı"))
  .catch(() => console.log("bağlanmadı"));


  module.exports = Todo