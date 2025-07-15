const fs = require("fs");



fs.writeFile("../demo.txt","hello g27",function(err,data){
if(err) return console.log(err);
console.log("success!!")
})
fs.writeFile("../demo1.txt","hii",function(err,data){
    if(err) return console.log(err);
    console.log("succ!!")
})
fs.writeFile("../A.txt","hello",function(err,data){
if(err) return console.log(err);
console.log("success!!")
})
fs.writeFile("../B.txt","World",function(err,data){
    if(err) return console.log(err);
    console.log("succ!!")
})

