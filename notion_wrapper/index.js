const { iteratePaginatedAPI } = require("@notionhq/client")
require('dotenv').config()

const { parsePages, parseBlocks } = require("./data_parsers")

const fetchPages = async (client) => {
  const blockId = process.env.MAIN_PAGE_ID
  const response = await client.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  })
  return parsePages(response)
}

const retrieveBlockChildren = async (client,id) => {
  const blocks = []

  for await (const block of iteratePaginatedAPI(client.blocks.children.list, {
    block_id: id
  })) {
    blocks.push(block)
  }

  return blocks
}

const fetchPageContent = async (client, id) => {
  const result = await retrieveBlockChildren(client, id)
  return parseBlocks(result)
}

module.exports = {
  fetchPages,
  fetchPageContent
}