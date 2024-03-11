"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
require("express-async-errors");

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
  sequelize.sync()

  sequelize
  .authenticate()
  .then(() => console.log("bağlandı"))
  .catch(() => console.log("bağlanmadı"));

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};


const router = express.Router();
router
  .get("/", async (req, res) => {
    //const data = await Todo.findAll()
    const data = await Todo.findAndCountAll();
    res.status(200).send({
      error: false,
      result: data,
    });
  })
  .post("/", async (req, res) => {
    console.log(req.body);
    const receivedData = req.body;
    const data = await Todo.create({
      title: receivedData.title,
      description: receivedData.description,
      priority: receivedData.priority,
      isDone: receivedData.isDone,
    });
    res.status(201).send({
      error: false,
      result: data.dataValues,
    });
  })
  .get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const data = await Todo.findOne({ where: {id:id} });
    //const datas = await Todo.findByPk(req.params.id);
    res.status(200).send({
        error: false,
        result: data.dataValues,
      });
  });

app.use(router);
app.use(errorHandler);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))