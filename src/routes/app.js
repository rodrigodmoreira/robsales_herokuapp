const controllers = require('../controllers')

module.exports = (app) => {
  app.get('/', controllers.app.defaultMessage)
  app.get('/listUsers', controllers.app.listUsers)
  app.get('/findUser/:id', controllers.app.findUser)
  app.post('/login', controllers.app.login)
}