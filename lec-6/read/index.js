const fs = require("fs");
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data)
})
fs.readFile("../demo1.txt","utf-8",function(err,data){
    if(err) console.log(err);
    console.log(data);
})
fs.readFile("../A.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data)
})
fs.readFile("../B.txt","utf-8",function(err,data){
    if(err) console.log(err);
    console.log(data);
})

