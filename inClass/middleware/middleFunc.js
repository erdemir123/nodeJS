const middleFunc1= (req,res,next)=>{
    req.message1="middleFunc1"
    next()
}
const middleFunc2= (req,res,next)=>{
    req.message2="middleFunc2"
    next()
}
module.exports={
    middleFunc1,middleFunc2
}