"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

require("express-async-errors");


//Model import
app.use(express.json());
app.use(require("./app/routes/todo.router"));
app.use(require("./app/errorHandler/todo.error"));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
