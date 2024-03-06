"use strict"
const express = require('express')
const app = express()
require("dotenv").config()
const PORT =process.env.PORT

// app.get('/', (req, res, next) => {
//     if (req.query.username === "sadik") {
//         req.welcome= "Welcome"
//         res.userName= req.query?.username
//         next();
//     } else {
//         res.send("something went wrong");
//     }
// });
// app.get('/', (req, res) => res.send({
//     "message": req.welcome + " " + res.userName
// }))
const {middleFunc1,middleFunc2} = require("./middleFunc")
app.use(middleFunc1,middleFunc2) 
app.get('/', (req, res) => res.send({
    message1:"middleFunc1",
    message2:"middleFunc2",
    message:"finish"
    }))
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))