"use strict"
console.log("burası başka klasör")



// const testFunction =()=>{
// console.log("burası test function")
// }

// module.exports=testFunction



//module.exports = function () {
  //  console.log("burası test function")
//}


//Multiple function
const testFunctionA = () => {
    console.log("burası test function A")
}

const testFunctionB = () => {
    console.log("burası test function B")
}
const testFunctionC = () => {
    console.log("burası test function C")
}


// module.exports = {
//     test1:testFunctionA,test2:testFunctionB,test3:testFunctionC

// }


module.exports={
    testFunctionA : () => {
        console.log("burası test function A")
    },
    testFunctionB : () => {
        console.log("burası test function A")
    },
    testFunctionC : () => {
        console.log("burası test function A")
    },
}