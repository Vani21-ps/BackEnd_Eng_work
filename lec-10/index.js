const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}));
//app.use(express.static("/Users/vanijain/Desktop/BED/lec-10/public"))


//app.get("/",(req,res)=>{
 //res.sendFile(__dirname+"/index.html")
//})
//app.get("/",(req,res)=>{
//res.sendFile(__dirname+"/about.html")
//})
app.post("/addUser",(req,res)=>{
    console.log(req.body);
    let username=req.body.username;
    let password=req.body.password;
    res.json({
        username:username,
        password:password
    })
  //  res.send("check terminal for req.body")
});
app.listen(5200,()=>{
   console.log("server is running on port 5200")
});