"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */

const mongoose = require("mongoose");

//const nameSchema= new mongoose.Schema({fields},{tablo_adi})
const blogCategorySchema = new mongoose.Schema(
  {
    name: {
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
    collection: "blogCategory",
    timestamps: true, //createdate,updatedate
  }
);
const blogPostSchema = new mongoose.Schema(
  
  {
    blogCategoryId:{
      type:mongoose.Schema.Types.ObjectId,//foreign key tanımladık
      ref:"BlogCategory"
    },
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
const blogCategoryModel =mongoose.model("blogCategory",blogCategorySchema)


module.exports={
    BlogPost:BlogPostModel,
    blogCategoryModel:blogCategoryModel
}