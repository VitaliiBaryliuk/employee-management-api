const { DataTypes } = require('sequelize')
const dataBase = require('./index');

const Employee = dataBase.define('Employees', {
  employee_id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  employee_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date_of_joining: {
    type: DataTypes.DATE,
    allowNull: true
  },
  photo_file: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, { 
  freezeTableName: true,
  timestamps: false,
})

module.exports = Employee;