const express = require("express")
const router = express.Router()
router.get("/",(req,res,next)=>{
    res.send("hoşgeldiniz")
})
router.get("/mouse",(req,res,next)=>{
    res.send("mouse sayısı 5  adet")
})

module.exports=router

