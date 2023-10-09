
const express = require('express')
const questionnaire = require('./questionnaire')

const router = express.Router()
router.use('/questionnaires', questionnaire)

module.exports = router
