const { DataTypes } = require('sequelize')
const dataBase = require('./index');

const Department = dataBase.define('Departments', {
  department_id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { 
  timestamps: false,
})

module.exports = Department;