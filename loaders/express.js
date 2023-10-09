const routes = require('../routes')
var cors = require('cors')

const allowedOrigins = ['http://localhost:3000'];

const expressLoader = app => {
  app.use(cors())
  app.use(routes)
  
  app.get('/', (_req, res) => {
    return res.status(200).json({
      resultMessage: {
        en: 'Project is successfully working...'
      },
      resultCode: '00004'
    }).end()
  })
}

module.exports = expressLoader