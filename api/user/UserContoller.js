const userModel = require("./UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userController = {};

userController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = (await email) === "admin@codesfortomorrow.com";
    const checkPassword = (await password) === "Admin123!@#";
    if (!user) {
      return res.send({ msg: "Invalid email or password", status: false });
    }
    if (!checkPassword) {
      return res.send({ message: "Invalid email or password", status: false });
    }
    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.send({ msg: "user login successfully", status: true, token });
  } catch (e) {
    return res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: e.message,
    });
  }
};

module.exports = userController;
