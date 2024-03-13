"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */

const mongoose = require("mongoose");

//const nameSchema= new mongoose.Schema({fields},{tablo_adi})
const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    
  },
  {
    collection: "blogPost",
    timestamps: true, //createdate,updatedate
  }
);
const BlogPostModel =mongoose.model("blogPost",blogPostSchema)


module.exports={
    BlogPost:BlogPostModel
}