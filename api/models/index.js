pool = require('../utils/db_connection')

module.exports = {
  Usuario: require('./usuario')(pool),
  Doce: require('./doce')(pool)
}