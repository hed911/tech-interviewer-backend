const expressLoader = require('./express.js')

const loader = app => {
  expressLoader(app)
}

module.exports = loader