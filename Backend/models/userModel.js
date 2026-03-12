const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,require:[true, "Name is required"]},
    email:{type:String,require:[true, "email is required"],unique:true},
    password:{type:String,require:[true, "password is required"]},
    role:{type:String, default:'user'}
})

module.exports = mongoose.model("User", userSchema);