const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne( { email }).select ("+password")

    if (!user) return res.status(400).json("User not found");

    const match = user.password === password

    if (!match) return res.status(400).json("Wrong password");

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        token,
        role: user.role,
        email: user.email,
    });
};