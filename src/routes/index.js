const router = require('express').Router()
const departments = require('./departments')
const employees = require('./employees')

router.use('/departments', departments)
router.use('/employees', employees)

module.exports = router