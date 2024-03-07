const express = require("express");
const errorHandler = require("../middleware");
const router = express.Router();

// router.get("/user/:id", (req, res) => {
//   const id = req.params.id;

//   try {
//     if (isNaN(id)) {
//       throw new Error("Id is not number");
      
//     } else res.send(req.params.id);
//   } catch (error) {
//     console.log(error)
//     res.status(500).send({error:true,message:error.message})
//   }
// });

router.get("/user/:id", (req, res) => {
    res.errorStatusCode = 404 
    throw new Error("Id is not number",{cause:"No reasen"});
})


router.use(errorHandler)

module.exports = router;
