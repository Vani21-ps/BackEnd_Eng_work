const express = require("express");
const { m1, m2,checkAdmin} = require("./middleware/middleware");
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const blogsRouter = require("./routes/blogsRouter");
app.use(m1);
//app.use(m2);


app.get("/home",(req,res,next)=>{
    console.log("running controller home");
    res.json({
        success:true,
        message:"welcome"
    })
    next();
})
app.use(m2);
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
    return res.json({
        success:true,
        message:"admin dashboard",
    })
}
    return res.json({
        success:true,
        message:"not authoriised",
    })
})
app.use("/api/blogs",blogsRouter);
app.listen(5514,()=>{
    console.log("server is running on port 5534");
})