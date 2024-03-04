"use strict"
const express = require('express')
const app = express()
require("dotenv").config()
const PORT =process.env.PORT

app.get('/', (req, res, next) => {
    if (req.query.username === "sadik") {
        req.welcome= "Welcome"
        res.userName= req.query?.username
        next();
    } else {
        res.send("something went wrong");
    }
});
app.get('/', (req, res) => res.send({
    "message": req.welcome + " " + res.userName
}))
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))