const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/user');
const path = require('path');

const app = express();
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogspa')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Set view engine to HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // For serving static files (like images)

// Get route to fetch all blogs and render them
app.get('/', async (req, res) => {
  const blogs = await Blog.find();
  console.log(blogs);
  res.render('blog', { blogs });
});

// API route to fetch individual blog content
app.get('/api/blog/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return res.status(404).send('Blog not found');
  }

  blog.viewer += 1;  // Increment the view count
  await blog.save();
  res.json(blog);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


