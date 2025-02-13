const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    },
});

(async () => {
  try {
    await sequelize.sync();
    console.log("Database & Tables synced!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

module.exports = User;
