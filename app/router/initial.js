let initialController = require('../controller/initialController'),
    initial = new initialController()
    require('../service/initialService')

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    initial.store(req, res, next)
  })
}