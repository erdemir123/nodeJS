const express = require("express")
const app = express()

app.get("/",(req,res,next)=>{
    res.status(200).send('Sorry, cant find example:-) ');
})
app.use("/magaza",require("./magaza.js"))


app.listen(8020, ()=>{console.log("burası 8020 portu")})