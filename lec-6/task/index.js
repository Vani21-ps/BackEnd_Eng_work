const fs= require("fs");
//read A.txt and B.txt and write in file C.txt
fs.readFile("../A.txt", "utf8", function(err, data){
if(err) return console.log(err);
let data1 = data;
fs.readFile("../B.txt","utf-8",function(err,data){
if(err) return console.log(err);
let data2=data;
let C=data1.trim()+"\n"+data2.trim();
fs.writeFile("../Cd.txt",C,function(err){
    if(err) return console.log(err);
    console.log("done");
})
})
})
