const fs = require("fs");

let users=[
{
    id: 1,
    name: "nitesh",
    age: "24"
    
},
{
    id:2,
    name : "Pranav" ,
    age: "25"

},
]
fs.writeFile("../users2.txt" , JSON.stringify(users) , function(err){
if(err) return console.log(err);
console.log("Users data saved to users.txt");

})