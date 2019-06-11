const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'robsales',
  password: '@cmpf',
  port: 5432,
})

module.exports = {
  User: require('./user')(pool)
}