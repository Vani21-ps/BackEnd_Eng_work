const express = require("express");
const router = express.Router();
const Blog = require("../model/blog");
let {postAddBlog,getAllBlog,getOneBlog,deleteOneBlog} = require("../controller/blogController");

// CREATE blog
router.post("/", postAddBlog);

// DELETE blog
router.delete("/:id", deleteOneBlog);

// READ all blogs
router.get("/", getAllBlog);

// READ single blog
router.get("/:id",getOneBlog);

module.exports = router;