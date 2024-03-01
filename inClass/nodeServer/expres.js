"use strict"
/*
Node Server
*/




require("dotenv").config()
console.log(process.env.PORT)
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"

const express = require("express")
const app = express()

app.get("/",(req,res)=>{
  const obj = {
    "name":"sadik",
    "surNAme":"ERDEMİR"
  }
  res.send(obj)
})


app.listen(process.env.PORT)
console.log(`Server running at ${"http://" +process.env.HOST + ":" + process.env.PORT}`);