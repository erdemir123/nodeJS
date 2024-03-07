const express = require('express')
require("dotenv").config()
const Port = process.env.PORT || 8000
const app = express()
const router = require("./routes")

app.use(router)
app.listen(Port, () => console.log(`Example app listening on port ${Port}!`))