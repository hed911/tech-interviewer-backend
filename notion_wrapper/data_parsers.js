const parsePages = data => {
  return data.results.map(r => ({ id: r.id, title: r.child_page.title })) 
}

const parseBlocks = data => {
  return data.map(block => block.bulleted_list_item?.rich_text[0].plain_text)
             .filter(text => text)
}

module.exports = {
  parsePages,
  parseBlocks
}
