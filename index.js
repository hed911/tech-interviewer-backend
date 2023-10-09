const express = require('express')
const loader = require('./loaders')

const app = express()
loader(app)

app.listen(process.env.PORT, () => {
  console.log(`Service running at http://localhost:${process.env.PORT}`)
})
