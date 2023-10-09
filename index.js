const express = require('express')
const loader = require('./loaders')

const port = 4000
const app = express()
loader(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
