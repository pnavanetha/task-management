const User = require("../models/userModel");

exports.createUser = async (req, res)=>{
    try {
        const { name, email, password } = req.body;
        const user = new User({name,email,password,...req.body});
        await user.save();
        res.status(200).json({message: "User created successfully", user});
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message})
        
    }

}

exports.getUser = async(req,res)=>{
   try {
        const users = await User.find();

        res.status(200).json({message: "Users fetched successfully", users});

    } catch(error) {
        res.status(500).json({message:"Server Error", error: error.message})
    }

}