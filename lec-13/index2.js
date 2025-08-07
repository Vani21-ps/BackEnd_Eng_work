const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.static(__dirname+"/public"));
app.get("/todos",(req,res)=>{
   fs.readFile(__dirname+"/todos.json","utf-8",(err,data)=>{
    if(err){
        console.error("Error reading todos.json:", err);
        return;
    }
    res.json(JSON.parse(data));
})})


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})