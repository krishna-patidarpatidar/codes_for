const express = require("express");
const userController = require("./UserContoller");

const router = express.Router(); 


router.post("/login",userController.login);


module.exports = router;
