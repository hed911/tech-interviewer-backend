
const express = require('express')
const { getQuestionnairesHandler, getQuestionnaireHandler } = require('../controllers/questionnaires')

const router = express.Router()

router.get('/', getQuestionnairesHandler)
router.get('/:id', getQuestionnaireHandler)

module.exports = router
