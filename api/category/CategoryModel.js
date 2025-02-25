const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const Category = sequelize.define("Category", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await sequelize.sync({ alter: true }); ;
    console.log("Database & Tables synced!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

module.exports = Category;
