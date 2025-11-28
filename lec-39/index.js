const express = require('express');
const app = express();
app.use(express.json());
//const sum = require("./sum");

app.post("/sum", (req, res) => {
  let { a, b } = req.body;
  if(!a||!b){
    return res.json({ 
        success: false,
        message:"invalid argument"
       })
    }
  res.json({ 
    success: true,
    data:a+b
   });
});
app.post("/multiply", (req, res) => {
    let { a, b } = req.body;
    res.json({
        success: true,
        data: a * b
    });
});

//app.listen(3000, () => {
 // console.log("server running at port 3000");
//});
module.exports = app;