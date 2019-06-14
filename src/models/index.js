pool = require('../db_connection')

module.exports = {
  Usuario: require('./usuario')(pool)
}