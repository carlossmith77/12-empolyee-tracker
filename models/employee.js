const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    category_name:{type: DataTypes.STRING}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports(Employee);