const { fetchPages } = require('../../notion_wrapper')
const { Client } = require("@notionhq/client")

const notionClient = new Client({
  auth: process.env.NOTION_SECRET_KEY,
})

const getQuestionnairesHandler = async (req_, res) => {
  res.send(await fetchPages(notionClient))
}

module.exports = getQuestionnairesHandler