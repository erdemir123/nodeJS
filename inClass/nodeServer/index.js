"use strict"
/*
Node Server
*/




require("dotenv").config()
console.log(process.env.PORT)
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"
var http = require('http');
const app = http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
//   console.log(req.url)
//   console.log(req.statusCode)
//   console.log(req.statusMessage)
//   console.log(req.method)
//   console.log(req.headers)
  
  if(req.url == "/sadik"){
    //res.end('Hello World buranın ismi sadik');
    if(req.method == "GET") {
        res.statusCode=400
        res.statusMessage="hata olmasi gerekior"
        res.end("burası Get isteği")}
    else res.end("burası Get isteği değil")
  }
  else if(req.url == "/merve"){
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write("ben ")
    res.write("merveyi ")
    res.write("seviyorum !!!")
    res.end();
  }
  else{
    const obj={
        "error":false,
        "message":"this is list page",
        "deneme":"deneme"
    }
    res.end(JSON.stringify(obj))
  }
});
app.listen(process.env.PORT)
console.log(`Server running at ${"http://" +process.env.HOST + ":" + process.env.PORT}`);