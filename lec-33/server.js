const express = require('express');
const app = express();
const { createClient}= require("redis");
const client = createClient()
async function connect(){
   await client.connect()
    client.on("error",function(err){
        console.log(err)
    })
}
//connect()
//.then(()=>{
//app.listen(3000, () => {
  //console.log("server started");
//});
//})
async function cachedData(){
    await client.connect()
    await client.set("user:100",JSON.stringify([{
        name:"John",
        age:30
    }]))
}
//cachedData()
//  .then(()=>{
   // console.log("data cached")
//})
async function readUser(){
    await client.connect()
 let user=await client.get("user:100")
 return user;               
}

readUser().
then((data)=>{
    console.log(JSON.parse(data))
})