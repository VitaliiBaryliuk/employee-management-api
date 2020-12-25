const router = require('express').Router()
const Employee = require('../models/Employee')

router.get('/', async function(req, res) {
  try {
    const result = await Employee.findAll()

    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(400)
  }
})

router.get('/:department_id', async function(req, res) {
  // try {
  //   const departments = await Employee.findAll()

  //   return res.status(200).json(departments)
  // }catch(error) {
  //   return res.status(500)
  // }
})

router.post('/', async function(req, res) {
  try {
    const data = req.body

    if (!data.employee_name || !data.department) {
      return res.status(400).json({ success: false, message: "employee_name and department is required params" })
    }
    
    const employeeData = {}

    if (data.employee_name)
      employeeData['employee_name'] = data.employee_name

    if (data.department)
      employeeData['department'] = data.department

    if (data.date_of_joining)
      employeeData['date_of_joining'] = data.date_of_joining

    if (data.photo_file)
      employeeData['photo_file'] = data.photo_file

    const result = await Employee.create(employeeData)
    
    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(500).json({ success: false, message: error })
  }
})

router.put('/', async function(req, res) {
  try {
    const data = req.body

    if (!data.employee_id) {
      return res.status(400).json({ success: false, message: "employee_id is required param" })
    }
    const employeeData = {}

    if (data.employee_name)
      employeeData['employee_name'] = data.employee_name

    if (data.department)
      employeeData['department'] = data.department

    if (data.date_of_joining)
      employeeData['date_of_joining'] = data.date_of_joining

    if (data.photo_file)
      employeeData['photo_file'] = data.photo_file

    console.log('employeeData', employeeData)
    
    const result = await Employee.update(employeeData, { where: { employee_id: data.employee_id } })

    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(400).json({ success: false, message: error })
  }
})

router.delete('/', async function(req, res) {
  try {
    const data = req.body;
    
    if (!data.employee_id) {
      return res.status(400).json({ success: false, message: "employeeId is required param" })
    }

    const result = await Employee.destroy({ where: { employee_id: data.employee_id } })

    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(400).json({ success: false, message: error })
  }
})

module.exports = router