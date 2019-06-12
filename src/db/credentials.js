// module.exports = {
//   user: 'admin',
//   host: 'localhost',
//   database: 'robsales',
//   password: '@cmpf',
//   port: 5432,
// }

module.exports = {
  connectionString: process.env.DATABASE_URL,
  ssl: true
}