const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db/connection');

class Role extends Model {}

Role.init(
  {
    title:{type: DataTypes.STRING},
    salary:{type:DataTypes.FLOAT},
    department_id:{type:DataTypes.INTEGER}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports=Role;