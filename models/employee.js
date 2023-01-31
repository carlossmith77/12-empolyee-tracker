const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db/connection');

class Employee extends Model {}

Employee.init(
  {
    last_name:{type: DataTypes.STRING},
    first_name:{type: DataTypes.STRING},
    role_id:{type:DataTypes.INTEGER},
    manager_id:{type:DataTypes.INTEGER}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

module.exports=Employee;