"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */


const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/")
    .then(()=>console.log("DB CONNECTED"))
    .catch((err)=>console.log("DB NOT CONNECTED"))


