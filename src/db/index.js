const Pool = require('pg').Pool
const credentials = require('./credentials')

const pool = new Pool(credentials)
console.log(pool.query('select * from users'))

module.exports = pool