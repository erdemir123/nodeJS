"use strict"
const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST 


const router = require("./routes/index.js")
app.use(router)



app.listen(PORT,()=> console.log(`http://${HOST}:${PORT}`))