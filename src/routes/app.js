const controllers = require('../controllers')

module.exports = (app) => {
  app.get('/', controllers.app.defaultMessage)
  app.get('/listUsuarios', controllers.app.listUsuarios)
  app.post('/login', controllers.app.login)
}