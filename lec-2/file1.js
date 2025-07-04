let file3=require("./file3.js");
let res=file3.add(2,3);
console.log(res);
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
module.exports.add=add;
module.exports.sub=sub;