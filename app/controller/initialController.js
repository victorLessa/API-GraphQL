class Initial{
  constructor() {
  }

  store(req, res, next) {
    try {
      res.send(true)
    } catch(error) {
      next(error)
    }
  }
}
module.exports = Initial