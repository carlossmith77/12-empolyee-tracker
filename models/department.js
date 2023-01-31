const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db/connection');

class Department extends Model {}

Department.init(
  {
    department_name:{type: DataTypes.STRING}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'departments',
  }
);

console.log ("DONE");
module.exports =Department;