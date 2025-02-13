const express = require("express");
const categoryController = require("./CategoryController");
const authUser = require("../../config/AuthUser");

const router = express.Router();

router.post("/create", authUser, categoryController.createCategory);
router.get("/getAll", authUser, categoryController.getCategory);
router.put("/update/:id", authUser, categoryController.updateCategory);
router.delete("/delete/:id", authUser, categoryController.deleteCategory);

module.exports = router;
