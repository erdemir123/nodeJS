"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());
require("express-async-errors");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3");
// sequelize.define("table NAme",{ model Detail})
const Todo = sequelize.define("todos", {
  //sequileze da id yi otomatik oluşturulur
  // id:{
  //     type:DataTypes.INTEGER,
  //     allowNull:false,
  //     unique:true,
  //     comment:"description",
  //     primaryKey:true,
  //     autoIncrement:true,
  //     field:"custom_name",
  //     defaultValue:"default"
  // }
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
  //
});
//stncronization yapacaksın yani mpodel bilgisini db ye uygula
//sequelize.sync()
//tekrar oluşturmayı istiyorsan  sequelize.sync({force:true}) ama veriler gider
//tekrar oluşturmayı istiyorsan  sequelize.sync({alter:true}) ama veriler silinmeyecek bi kod
//connect to db
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
    const data = await Todo.findOne({ where: {id:id} });
    //const datas = await Todo.findByPk(req.params.id);
    res.status(200).send({
        error: false,
        result: data.dataValues,
      });
  });

app.use(router);
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
