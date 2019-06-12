const _ = require('lodash')

module.exports = (pool) => ({
  findAll: () => pool.query('select * from users order by id asc')
    .then(res => res.rows)
    .catch(err => { throw err }),
  
  findById: (id) => pool.query('select * from users where id = $1', [id])
    .then(res => res.rows.length > 0 ? res.rows[0] : null)
    .catch(err => { throw err }),

  findUserWithPwd: (username, password) => pool.query('select * from users where username = $1 and password = $2',[username, password])
    .then(res => res.rows.length > 0 ? res.rows[0] : null)
    .catch(err => { throw err }),
  
  bulkCreate: (users) => {
    users.forEach(user => {
      let createdUser = pool.query('insert into user (username, password, name, email) values ($1,$2,$3,$4)',[user.username, user.password, user.name, user.email])
        .then(res => console.log(res))
        .catch(err => err)
    })
  }
})