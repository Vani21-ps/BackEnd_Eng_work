const User=require("../model/user");
const Blog=require("../model/blog");


module.exports.postAddBlog =async (req, res) => {
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
}

module.exports.deleteOneBlog=async (req, res) => {
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
}
module.exports.getAllBlog=async (req,res)=>{
    let allBlogs = await Blog.find();
    res.json({
        success : true,
        message : "all data fetched successfully",
        data : allBlogs
    })
}

module.exports.getOneBlog=async (req,res)=>{
    let id = req.params.id;
    let blog = await Blog.findById(id); 
    res.json({
        success : true,
        message : "blog fetched successfully",
        data : blog
    })
}