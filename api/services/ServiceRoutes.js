const express = require("express");
const serviceController = require("./ServiceController");
const authUser = require("../../config/AuthUser");

const router = express.Router(); 

router.post("/create", authUser,serviceController.createService);
router.get("/getAll", authUser,serviceController.getService); 
router.put("/update/:id", authUser,serviceController.updateService); 
router.delete("/delete/:id", authUser,serviceController.deleteService); 

module.exports = router;
