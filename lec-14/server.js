const express = require("express");
const app =express();
const fs = require("fs");
app.use(express.static(__dirname+"/public"));

app.get("/user",(req,res)=>{
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        let users=JSON.parse(data);
        res.json(users); 
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})