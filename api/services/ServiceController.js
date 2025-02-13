const serviceModel = require("./ServiceModel");

const serviceController = {};

serviceController.createService = async (req, res) => {
  try {
    const Service = await serviceModel.create(req.body);
    return res.send({
      msg: "Service created successfully",
      Service,
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

serviceController.getService = async (req, res) => {
  try {
    const services = await serviceModel.findAll();
    return res.send({
      msg: "Services fetched successfully",
      status: true,
      services,
    });
  } catch (e) {
    return res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: e.message,
    });
  }
};

serviceController.updateService = async (req, res) => {
  try {
    const [updatedRows] = await serviceModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRows > 0) {
      return res.send({
        msg: "Service updated successfully",
        status: true,
    
      });
    } else {
      return res.status(404).send({
        msg: "Service not found",
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

serviceController.deleteService = async (req, res) => {
  try {
    const deletedRows = await serviceModel.destroy({
      where: { id: req.params.id },
    });

    if (deletedRows > 0) {
      return res.send({
        msg: "Service deleted successfully",
        status: true,
      });
    } else {
      return res.status(404).send({
        msg: "Service not found",
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

module.exports = serviceController;
