const User=require("../model/user");
const Blog=require("../model/blog");


module.exports.postAddBlog =async (req, res) => {
  try {
    const { title, body, userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const newBlog = new Blog({
      title,
      body,
      date: Date.now(),
      userId,
    });

    await newBlog.save();

    user.blogs.push(newBlog._id);
    await user.save();

    res.json({
      success: true,
      message: "Blog added successfully",
      data: newBlog,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports.deleteOneBlog=async (req, res) => {
  try {
    const blogId = req.params.id;  
    const userId = req.body.userId;

    const blogExist = await Blog.findById(blogId);
    if (!blogExist) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    if (String(blogExist.userId) !== String(userId)) {
      return res.json({
        success: false,
        message: "You are not authorized to delete this blog",
      });
    }

    await Blog.findByIdAndDelete(blogId);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports.getAllBlog=async (req, res) => {
  const allBlogs = await Blog.find();
  res.json({
    success: true,
    message: "All data fetched successfully",
    data: allBlogs,
  });
}

module.exports.getOneBlog=async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json({
    success: true,
    message: "Blog fetched successfully",
    data: blog,
  });
}