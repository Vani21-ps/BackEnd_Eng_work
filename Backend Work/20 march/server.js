const express = require("express");
const app = express();
const mongoose = require('mongoose');
const user = require("./model/user");
app.use(express.urlencoded({extends:true}));
app.use9express.json();
app.post("/users", async(req,res)=>{
    let (name,email,password) = req.body;
    let newUser = new user({
        name:name,
        email:email,
        password:password
    })
    await newUser.save();
    res.send("user added")
    
})
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> console.log('Connected!'))
.catch((err)=> console.log(err));
app.listen(3333,()=>{
    console.log("server started");
})