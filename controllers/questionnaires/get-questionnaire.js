const { fetchPageContent } = require('../../notion_wrapper')
const { Client } = require("@notionhq/client")

const notionClient = new Client({
  auth: process.env.NOTION_SECRET_KEY,
})

const getQuestionnaireHandler = async (req, res) => {
  res.send(await fetchPageContent(notionClient, req.params.id))
}

module.exports = getQuestionnaireHandler