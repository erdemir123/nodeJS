const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT
const HOST = process.env.HOST


app.get("/",(req,res)=>{
    res.send(
        {
            headers:req.headers
        }
    )
})

app.listen(8000,()=> console.log(`http://${HOST}:${PORT}`))