const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : String,
    email: String ,
    password: Date,
    userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Blogs
        }
            
});

module.exports = mongoose.model('User', UserSchema);