const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User" // Reference to the User model
    }

});

module.exports = mongoose.model('Blogs', BlogPost)