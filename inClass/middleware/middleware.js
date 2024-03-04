"use strict"
const express = require('express')
const app = express()
require("dotenv").config()
const PORT =process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))