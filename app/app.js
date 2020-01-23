const express = require('express');
const initialRoute = require('./router/initial')
class App {
  constructor() {
    this.express = express()
    this.route()
  }

  route() {
    initialRoute(this.express)
  }
}

module.exports = new App().express