const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date
});

BlogPost.virtual('id').get(function () {
  return this._id.toHexString();
});

BlogPost.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Blogs', BlogPost);