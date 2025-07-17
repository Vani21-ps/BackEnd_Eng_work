const fs = require("fs");
const { read } = require("../IO/io.js");
// fs.readFile("../users.txt", "utf8", (err, data) => {
//   if (err) 
//     return console.log("Error reading file:", err);
// console.log(data)
// })
async function readUsers(){
let users=await read("../users.txt");
let users2=await read("../users2.txt");
console.log(users2)
console.log(users);
}
readUsers();