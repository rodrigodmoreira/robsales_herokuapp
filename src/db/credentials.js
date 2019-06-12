// module.exports = {
//   user: 'admin',
//   host: 'localhost',
//   database: 'robsales',
//   password: '@cmpf',
//   port: 5432,
// }

// module.exports = {
//   user: 'xqsapqxuhzsakn',
//   host: 'ec2-184-73-169-163.compute-1.amazonaws.com',
//   database: 'd3p7sc681qfvsd',
//   password: '80a71205f703f4bd2fd967f477a778d423e8e612e89bad2b3e4d76e3b60deab3',
//   port: 5432,
//   ssl: true
// }

module.exports = {
  connectionString: process.env.DATABASE_URL,
  ssl: true
}