"use strict"
 
console.log("object")
console.log("object sadık")
require("./modules/module")
require("./modules") // inex.js varsa uzantıyı yazmayabilirsin


const testSingleFunction = require("./modules/module")

//testSingleFunction()



//multiFunction

//Array
// const [test1,test2,test3]= require("./modules/module")
// test1()
// test2()

const {testFunctionA ,testFunctionB,testFunctionC}= require("./modules/module")
testFunctionC()


//require("node:http") once proje klasrü sonra globale e bakar 


require("dotenv").config() //DOT ENV KLASÖRÜNDEKİ LERİ PROCESS E AKTARIR
console.log(process.env.PORT)
console.log(process.env.HOST)
