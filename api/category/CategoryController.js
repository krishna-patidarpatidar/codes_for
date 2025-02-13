const categoryModel = require("./CategoryModel");

const categoryController = {};

categoryController.createCategory = async (req, res) => {
  try {
    const category = await categoryModel.create(req.body);
    return res.send({
      msg: "Category created successfully",
      category,
      status: true,
    });
  } catch (e) {
    return res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: e.message,
    });
  }
};

categoryController.getCategory = async (req, res) => {
  try {
    const categories = await categoryModel.findAll();
    return res.send({
      msg: "Categories fetched successfully",
      status: true,
      categories,
    });
  } catch (e) {
    return res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: e.message,
    });
  }
};

categoryController.updateCategory = async (req, res) => {
  try {
    const [updatedRows] = await categoryModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRows > 0) {
      return res.send({
        msg: "Category updated successfully",
        status: true,
    
      });
    } else {
      return res.status(404).send({
        msg: "Category not found",
        status: false,
      });
    }
  } catch (e) {
    return res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: e.message,
    });
  }
};

categoryController.deleteCategory = async (req, res) => {
  try {
    const deletedRows = await categoryModel.destroy({
      where: { id: req.params.id },
    });

    if (deletedRows > 0) {
      return res.send({
        msg: "Category deleted successfully",
        status: true,
      });
    } else {
      return res.status(404).send({
        msg: "Category not found",
        status: false,
      });
    }
  } catch (e) {
    return res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: e.message,
    });
  }
};

module.exports = categoryController;
