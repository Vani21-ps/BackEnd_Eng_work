const mongoose = require("mongoose");
const express = require("express");
const router = express.router();
const User = require("../model/user")


// Define the User schema
let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        required: true,  // Fixed "require" to "required"
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog"
        }
    ]
});
router.get("/register",async(req,res)=>{
    res.render("register")
})
router.post("/register",async(req,res)=>{
    const {name,email,password} = req.body;
    let newUser=new User({name:name,email:email,password:password})
    await newUser.save();
    res.redirect("/")
})
router.get("/", async(req,res)=>{
    let allusers=await User.find()
    res.render("users",{
        users:allusers})
    })


// Define the Blog schema
let userBlog = new mongoose.Schema({
    title: {
        type: String,
        required: true,  // Fixed "require" to "required"
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create Mongoose models
let User = mongoose.model("User", userSchema);
let Blog = mongoose.model("Blog", userBlog);

// Export models
module.exports = { User, Blog };
