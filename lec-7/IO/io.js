function read(file){
    return new Promise((resolve, reject) => {
  const fs = require("fs");
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      return reject("Error reading file:", err);
    }
    let users = JSON.parse(data);
    resolve(users);
  })
})
}
function write(file, data){
    return new Promise((resolve, reject) => {
  const fs = require("fs");
  fs.writeFile(file, data, (err) => {
    if (err) {
      return reject("Error writing file:", err);            

    }
    resolve("File written successfully");


    });  
})
}
module.exports.read = read;
module.exports.write = write;