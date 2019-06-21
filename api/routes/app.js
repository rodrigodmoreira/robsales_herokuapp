const controllers = require('../controllers')

const baseUrl = '/api'

module.exports = (app) => {
  app.get(`${baseUrl}`, controllers.app.defaultMessage)
  app.post(`${baseUrl}/login`, controllers.app.login)
  app.post(`${baseUrl}/signup`, controllers.app.signup)
  app.get(`${baseUrl}/listProducts`, controllers.app.listProducts)
}