const express = require("express");
const app = express();
/*
app.use(m1);
//app.use(m2);
app.get("/", (req,res)=>{
    console.log("running get request on path /");
    res.send("Home");
})
app.use(m3);
app.get("/",(req,res)=>{
    console.log("running about request");
        res.send("About Page")
    });
app.use(m2);
app.get("/about",m4,(req,res)=>{
    console.log("running about request");
    res.send("About Page")
});
function m4(req,res,next) {
    console.log("running m4");
    next();
}
function m1(req,res,next) {
    console.log("running middleware 1")
    next();

}
function m3(req,res,next){
    console.log("running middleware 3");
    next();
}

function m2(req,res,next){
    console.log("running middleware 2");
    next();
}
app.listen(3002,()=>{
    console.log("sever started");
})

let userData=[
    {
id:1,
name:"vani",
adress:"delhi"
    },
    {
        id:2,
        name:"van",
        adress:"del" 
    },
    {
        id:3,
name:"va",
adress:"delh"
    }
]
app.get("/allusers",(req,res)=>{
    res.send(userData);
})
app.get("/getuserbyid",(req,res)=>{
//let id= req.query.id other method
let {id} = req.query;
for(let i=0;i<userData.length;i++){
    if(userData[i].id==id){
        return res.send(userData[i]);
    }
}
res.send("user not found");
})*/

app.listen(3025, () => {
    console.log("server started");
});
let blog= [
    { id: 1, title: "fashion", content: "you are good"},
    {id: 2, title: "magazine", content: "you are good"},
    {id: 3, title: "sports", content: "you are going well"}
];
//getall blogs
app.get("/allblogs",(req,res)=> {
    res.send(blog);
});
//get blog by id
app.get("/getblogbyid", (req,res)=> {
    let {id} = req.query;
    for(let i=0;i<blog.length;i++) {
        if(blog[i].id==id) {
            return res.send(blog[i])
        }
    }
    res.send("user not found");
});


  get("/address",(req,res)=>{
    let {id,title,content} = req.query;
    console.log(id,title,content);
    let newUser={
        id:id,
        title:title,
        content:content
    }
    blog.push(newUser);
    res.send("user added successfully..");
})
//format of adding new user(it will show in terminal(the user))
// localhost:3025/address?id=7&title="go"&content"you"
//format of getting all users on browser
//localhost:3025/allblogs

//post request:
//data that is send in post request are not visible in url
//