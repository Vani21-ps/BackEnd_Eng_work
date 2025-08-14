const express = require("express");


const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  viewer: { type: Number, default: 0 }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
