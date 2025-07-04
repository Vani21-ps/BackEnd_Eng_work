let file1=require("file1");

let res=file2.add(2,3);
console.log(res);
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
module.exports.div=div;
module.exports.mul=mul;