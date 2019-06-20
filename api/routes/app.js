const controllers = require('../controllers')

const baseUrl = '/api'

module.exports = (app) => {
  app.get(`${baseUrl}`, controllers.app.defaultMessage)
  app.get(`${baseUrl}/listUsuarios`, controllers.app.listUsuarios)
  app.post(`${baseUrl}/login`, controllers.app.login)
  app.post(`${baseUrl}/signup`, controllers.app.signup)
}