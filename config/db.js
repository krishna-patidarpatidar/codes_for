const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('codes_for', 'postgres', 'Kashi12345', {
    host: 'localhost',
    dialect: 'postgres' 
  });

  const connetion= async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  module.exports= connetion