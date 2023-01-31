require('dotenv').config();
const conn = {
    DB_NAME:'employeetrack_db',
    DB_USER:'root',
    DB_PASSWORD:''
}
const Sequelize = require('sequelize');
console.log ("DB", conn.DB_NAME);
const sequelize = new Sequelize(conn.DB_NAME, conn.DB_USER, conn.DB_PASSWORD, 
   { 
    host: 'localhost',
      dialect: 'mysql'
    });

module.exports = sequelize;

/*    
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
    */