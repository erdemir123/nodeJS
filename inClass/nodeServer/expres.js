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

app.use("/public",express.static(__dirname + "/public"))
// app.get("/public/test.txt",(req,res,next)=>{
//   res.sendFile(__dirname + "/public/test.txt")

// })
app.get("/",(req,res)=>{
  const obj = {
    "name":"sadik",
    "surNAme":"ERDEMİR"
  }
  res.send(obj)
})
app.get("/profil/:name",(req,res)=>{
  console.log(req.params.name)
  console.log(req.query)
  if(!req.query.name) return res.send("bir isim yaz")
  res.send(`${req.params.name} ${req.query.isim} profile hoşgeldin`)
})


app.listen(process.env.PORT)
console.log(`Server running at ${"http://" +process.env.HOST + ":" + process.env.PORT}`);