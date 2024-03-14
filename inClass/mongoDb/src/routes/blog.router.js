"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//Routers
const {BlogPost,BlogCategory} = require("../controllers/blog.controller");
const router = require("express").Router();

router.route("/categories")
  .get(BlogCategory.list)
  .post(BlogCategory.create)

router.route("/categories/:categoryId")
  .get(BlogCategory.read)
  .put(BlogCategory.update)
  .delete(BlogCategory.delete);


router.route("/posts")
  .get(BlogPost.list)
  .post(BlogPost.create)

router.route("/posts/:postsId")
  .get(BlogPost.read)
  .put(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
