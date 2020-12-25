const { Sequelize } = require('sequelize')

const dataBase = new Sequelize('EmployeeManagementPortal', 'SA', 'Vitos11222211', {
  host: 'localhost',
  port: '1433',
  dialect: 'mssql',
  dialectOptions: {
      options: {
          encrypt: true,
          validateBulkLoadParameters: true
      }
  }
})

module.exports = dataBase