pool = require('../db')

module.exports = {
  User: require('./user')(pool)
}