const router = require('express').Router()
const Department = require('../models/Department');

router.get('/', async function(req, res) {
  try {
    const result = await Department.findAll()

    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(500)
  }
})

router.post('/', async function(req, res) {
  try {
    const data = req.body

    if (!data.department_name) {
      return res.status(400).json({ success: false, message: "department_name is required param" })
    }

    const result = await Department.create({ department_name: data.department_name })
    
    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(500).json({ success: false, message: error })
  }
})

router.put('/', async function(req, res) {
  try {
    const data = req.body

    if (!data.department_id) {
      return res.status(400).json({ success: false, message: "department_id is required param" })
    }

    const result = await Department.update({ department_name: data.department_name }, { where: { department_id: data.department_id } })

    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(400).json({ success: false, message: error })
  }
})

router.delete('/', async function(req, res) {
  try {
    const data = req.query;

    if (!data.department_id) {
      return res.status(400).json({ success: false, message: "department_id is required param" })
    }

    const result = await Department.destroy({ where: { department_id: data.department_id } })

    return res.status(200).json({ success: true, result })
  }catch(error) {
    return res.status(400).json({ success: false, message: error })
  }
})

module.exports = router