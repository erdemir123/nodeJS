"use strict"
//ideal sıra bundan sonra bunu kullan

const express= require("express")
const app = express()
require("dotenv").config()
require("./src/configs/connection")
app.use(express.json())
require("express-async-errors");

const PORT = process.env.PORT 
const HOST = process.env.HOST 


app.all("/",(req,res)=>
{
    res.status(200).send("welcome")
})

app.use('/blog',require("./src/routes/blog.router"))
app.use(require("./src/middlewares/error"))

app.listen(PORT, () => console.log(`Example app listening on PORT http://${HOST}:${PORT}`))
require("./src/sync")()