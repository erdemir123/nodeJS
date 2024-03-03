"use strict"
require("dotenv").config

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || "127.0.0.1"


const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send({
        "message":"Hello"
    })
})
app.get("/post",(req,res)=>{
    res.send({
        "message":"Hello"
    })
})

// app.all('/',(req,res)=>{
//     res.send({
//         "message":"Hello All"
//     })
// })

//Joker Karakter araya tek karakter ne olursa 
// app.get('/ab(x)?12',(req,res)=>{
//     res.send({
//         "message":"Hello All"
//     })
// })
//x+ bir harf artı 2 harf daha 
// app.get('/ab(x+)12',(req,res)=>{
//     res.send({
//         "message":"Hello All"
//     })
// })
//* sonu ne olursa olsun
// app.get('/ab*',(req,res)=>{
//     res.send({
//         "message":"Hello All"
//     })
// })
//* arada ne olursa olsun  ne olursa olsun
// app.get('/a*b',(req,res)=>{
//     res.send({
//         "message":"Hello All"
//     })
// })


//regex---------- // iki slaş arasında regex kabul edilir yardımcı döküman regex regexxr.com
// app.get(/abc$/,(req,res)=>{
//     res.send({
//         "message":"Hello All"
//     })
// })


// parametre
app.get('/personel/:id/:location',(req,res)=>{
    console.log(req.params)
    res.send({
        "id":req.params.id,
        "location":req.params.location,
        url:{
            method:req.method,
            protocol:req.protocol,
            domain:req.domain,
            params: req.params,
            header:req.headers,
            path:req.path,
            body: req.body,
            querys:req.query
        }
    })
})
app.post('/personel/:id/:location',(req,res)=>{
    console.log(req.params)
    res.status(200).send({
        "id":req.params.id,
        "location":req.params.location,
        "status":res.statusMessage,
        "statusCode":res.statusCode,
        url:{
            method:req.method,
            protocol:req.protocol,
            domain:req.domain,
            params: req.params,
            header:req.headers,
            path:req.path,
            body: req.body,
            querys:req.query
        }
    })
})
/// redirect yapacaksan 301 kodunu ver yoksa sorun oluyor 
app.get("/redirect",(req,res)=>{
    res.redirect(301,"http://127.0.0.1:8000/personel/23/tr")
})



///dosya işlemleri 
app.get("/file",(req,res)=>{
    res.sendFile(__dirname+"/index.js")
})


// indirme download
app.get("/download",(req,res)=>{
    res.download("./readme.md","expresss sadık")
}) 
app.listen(PORT)
