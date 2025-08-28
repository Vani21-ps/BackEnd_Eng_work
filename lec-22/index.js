const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Blog = require('./model/blog');
const User = require('./model/user');
const isLogin = require('./middleware/isLogin');

// create
// Login route to generate JWT token
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.json({ success: true, token });
});

app.post("/blogs", isLogin, async (req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.userId; // from middleware
    let user = await User.findById(userId);
    if (!user) {
        return res.json({
            success: false,
            message: "Invalid User"
        });
    }
    let blog = {
        title: title,
        body: body,
        date: Date.now(),
        userId: userId
    };
    let newBlog = new Blog(blog);
    await newBlog.save();
    if (!user.blogs) user.blogs = [];
    user.blogs.push(newBlog._id);
    await user.save();
    res.json({
        success: true,
        message: "blog added successfully",
        data: newBlog
    });
});

app.delete("/blogs/:blogId", async (req, res) => {
    let blogId = req.params.blogId;
    let userId = req.body.userId;
    let blogExist = await Blog.findByIdAndDelete(blogId);
    if (!blogExist) {    
        return res.json({
            success: false,
            message: "Blog not found"
        });
    }
    let user = await User.findById(blog.userId);
    if (user) {
        user.blogs = user.blogs.filter(blogId => blogId.toString() !== id);
        await user.save();
    }
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: blog
    });
})

// read
// read all data
app.get("/blogs",async (req,res)=>{
    let allBlogs = await Blog.find();
    res.json({
        success : true,
        message : "all data fetched successfully",
        data : allBlogs
    })
})
// read single data
app.get("/blogs/:id",async (req,res)=>{
    let id = req.params.id;
    let blog = await Blog.findById(id); 
    res.json({
        success : true,
        message : "blog fetched successfully",
        data : blog
    })
})



// create user
app.post("/users", async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = {
        name : name,
        email : email,
        password : password
    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success : true,
        message : "user added successfully",
        data : newUser
    })
})

// read
// read all users
app.get("/users", async (req,res)=>{
    let allUsers = await User.find();
    res.json({
        success : true,
        message : "all users fetched successfully",
        data : allUsers
    })
})

// read single user
app.get("/users/:id", async(req,res)=>{
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success : true,
        message : "user fetched successfully",
        data : user
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('Connected!'));

app.listen(5556, () => {
    console.log(`Server is running on http://localhost:5556`);
});