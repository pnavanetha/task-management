const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token;

  // Check Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return res.status(401).json("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;   // contains id and role
    next();
  } catch {
    res.status(401).json("Invalid token");
  }
};

module.exports = auth;