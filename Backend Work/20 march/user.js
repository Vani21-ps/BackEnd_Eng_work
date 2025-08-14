const mongoose = require("mongoose");
let userSchema = new moingoose.Schema({
    name: String,
    email: String,
    password:{
        type:String,
        require:true
    }
});
module.exports = mongoose.model("User",userSchema);