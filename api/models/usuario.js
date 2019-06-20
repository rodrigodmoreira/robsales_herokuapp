const _ = require('lodash')

module.exports = (pool) => ({
  findAll: () => pool.query('select * from usuario order by cpf asc')
    .then(res => res.rows)
    .catch(err => { throw err }),
  
  findByCPF: (cpf) => pool.query('select * from usuario where cpf = $1', [cpf])
    .then(res => res.rows.length > 0 ? res.rows[0] : null)
    .catch(err => { throw err }),

  findUserWithPwd: (username, password) => pool.query('select * from usuario where username = $1 and password = $2',[username, password])
    .then(res => res.rows.length > 0 ? res.rows[0] : null)
    .catch(err => { throw err }),
  
  bulkCreate: (usuarios) => {
    let res = []
    let createdUser
    usuarios.forEach(usuario => {
      createdUser = pool.query('insert into usuario (cpf, username, password, nome, reputacao) values ($1,$2,$3,$4,$5)',[usuario.cpf, usuario.username, usuario.password, usuario.nome, 5])
        .then(qres => res.push(qres))
        .catch(err => { throw err })
    })
    return res
  }
})
