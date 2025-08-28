const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});

// Fix: prevent OverwriteModelError
const Blog = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);

module.exports = Blog;