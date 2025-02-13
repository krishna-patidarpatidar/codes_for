const jwt = require("jsonwebtoken");

require("dotenv").config();
const authUser = async (req, res, next) => {
  const token = req.header("authorization");
  if (!token) {
    res.send({ msg: "no token found", status: false });
  }
  try {
    // const Token= token.replace("Bearer ", "")
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;
    next();
  } catch (e) {
    res.send({ msg: "somthing went wrong", status: false });
  }
};

module.exports = authUser;
