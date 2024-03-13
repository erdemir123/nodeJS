"use strict"
//ideal sıra bundan sonra bunu kullan

const express= require("express")
const app = express()
require("dotenv").config()
require("./src/dbConnection/connection")
app.use(express.json())
require("express-async-errors");

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST 


app.all("/",(req,res)=>
{
    res.status(200).send("welcome")
})

app.use('/blog',require("./src/routes/blog.route"))
app.use(require("./src/errorHandler/error"))

app.listen(PORT, () => console.log(`Example app listening on PORT http://${HOST}:${PORT}`));