"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//Routers
const {BlogPost} = require("../controllers/blog.controller");
const router = require("express").Router();

router.route("/posts")
  .get(BlogPost.list)
  .post(BlogPost.create)

router.route("/posts/:postsId")
  .get(BlogPost.read)
  .put(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
