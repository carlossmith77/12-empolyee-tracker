require('dotenv').config();

const Sequelize = require('sequelize');
console.log ("DB", process.env.DB_NAME);
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });