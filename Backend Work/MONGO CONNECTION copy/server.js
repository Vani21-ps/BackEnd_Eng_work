const express=require("express");
const app=express();
const mongoose = require('mongoose');
const {user,blog} = require("./model/user");
const Blog=require("./model/blog");
const userRoute= require("./routes/user")
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'hbs');
app.get("/",(req,res)=> {
    res.render("home");
})
app.get("/userpage", (req,res)=>{
    
})
app.get("/user", (req,res)=>{
res.render("user",{
    name: "Vani",
    followers:["vani","vani","vani"]
})
})
app.get("/user", async (req, res) => {
    try {
        const users = await user.find();  // This is correct usage
        res.render("user", {
            name: "Vani",
            followers: users.map(u => u.name) // Assuming each user has a `name` field
        });
    } catch (error) {
        res.status(500).send("Error fetching users");
    }
});
app.get("/blog", (req,res)=>{
    res.render("blog",{
        blogs:[{id:1,title:"my first blog",
            content:"dsfs",banner:"https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="},
            
            {id:2,title:"my second blog",
                content:"dsfs",banner:"https://images.app.goo.gl/hGSH97"}
        ]

    })})

   
mongoose.connect('mongodb://127.0.0.1:27017/students1',{
})
.then(()=> console.log("Connected To The Database"))
.catch((err)=>{
    console.log(err);
})
const port=3000;
app.listen(port,(req,res)=>{
    console.log("Server running on port:" + port);
})
// Get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await user.find();
        res.send(allUsers);
    } catch (err) {
        res.status(500).send("Error fetching users");
    }
});

// Get user by ID
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const oneUser = await user.findById(id);
        if (!oneUser) {
            return res.status(404).send("User not found");
        }
        res.send(oneUser);
    } catch (err) {
        res.status(500).send("Error fetching user");
    }
});

app.post('/users',async(req,res)=>
{
    let {name,email,password}=req.body;
    let newUsers= new user({
        name:name,
        email:email,
        password:password
    })
    await newUsers.save();
    res.send("User Added");
})
app.post("/blog",async(req,res)=>{
    let {title,content,author,date}=req.body;
    let newBlog = new blog({
        title:title,
        content:content,
        author:author,
        date:date
    })
    await newBlog.save();
    res.send("Blog added")
})
app.delete("/users/:id", async (req, res) => {
    try {
        // Correcting req.params instead of res.params
        let { id } = req.params;  

        // Check if ID is provided
        if (!id) {
            return res.status(400).send("User ID is required");
        }

        // Find and delete user
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }

        res.send("User Deleted Successfully");
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
});

app.put("/users/:id",async(req,res)=>{
let {id}=req.params;
let {name,email,password}=req.body;
let updateUser= await user.findById(id);
updateUser.name=name;
updateUser.email=email;
updateUser.password=password;
await updateUser.save()
res.send("User Updated");
})
