
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */

const mongoose = require("mongoose");




 const passwordEncrypt = require("../helpers/passwordEncrypt")

//const nameSchema= new mongoose.Schema({fields},{tablo_adi})
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      //required: true,
      required:["true","Email must be required"],
      unique:true,
      validate:[
        (email)=>{
            if(email.includes('@') &&  email.includes('.')){
                return true
            }return false
        },"Email type is incorrect"
      ]
    },
    password:{
        type:String,
        trim: true,
      required: true,
      set:(password)=>passwordEncrypt(password)
    },
    firstname:String,
    lastname:String
  },
  {
    collection: "User",
    timestamps: true, //createdate,updatedate
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = {
    User: User,
};
