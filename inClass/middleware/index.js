"use strict"
const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST 

const router = express.Router()
app.use(router)
router.get("/:about",(req,res)=>{
    console.log(req.params.about)
    res.send("/")
})

app.listen(PORT,()=> console.log(`http://${HOST}:${PORT}`))