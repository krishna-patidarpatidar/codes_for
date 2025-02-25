const { DataTypes } = require("sequelize");
const { Category, sequelize } = require("../category/CategoryModel"); // Import Category model

// ✅ Define the Service Model
const Service = sequelize.define("Service", {
  serviceName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM("Normal", "VIP"), // Fixed ENUM for Type
    allowNull: false,
  },
  priceOptions: {
    type: DataTypes.STRING, // Allows multiple pricing options as an array
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
});


(async () => {
  try {
    await sequelize.sync({ alter: true }); ; 
    console.log("Database & Tables synced successfully!");
  } catch (error) {
    console.log("Error syncing database:", error);
  }
})();

module.exports = Service;
