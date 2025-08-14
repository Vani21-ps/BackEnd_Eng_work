const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Blogs" // Reference to the Blog model
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
