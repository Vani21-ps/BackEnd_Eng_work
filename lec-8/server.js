const express = require('express');
const app = express(); 

app.get("/", (req, res) => {
    console.log(req);
    //res.send("Hello World");
    res.json({
        name:"Vanshika",
        age: 20,
        city: "Delhi"   
    })
})
//path parameters
app.get("/user/:name", (req, res) => {
    console.log(req.params.id);
    let name=req.params.name;
 res.send(name);
});

app.listen(3335 ,()=> {
    console.log('Server is running on port 3335');
}
)
//2. query parameters
app.get("/blogs", (req, res) => {
    console.log(req.query);
    let name = req.query.name;
    let desc = req.query.desc;
  
    res.send(`Name: ${name}`);
   
});

//node js has event driven architecture 

//asynchronous non belocking behaviour
//NRE NODE JS RUN TIME ENVORnment