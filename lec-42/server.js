const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const User = require('./model/user.model');

app.post("/api/users/register",async (req, res) => {
const{name,email,password} = req.body;
//check if email is there in system
let  user=await User.findOne({
    email: email
})
if(user){res.json({
    success:false,
    message:"user already exists"})}
 let newUser= await  User.create({
    name,
    email,
    password
 })
 res.json({
    success:true,
    message:"user registered successfully",
 })
})
module.exports = app;
//app.listen(3000, () => {
 // console.log("server running");
//});