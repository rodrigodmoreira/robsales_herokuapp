const db = require('../models')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

module.exports = {
  // Exemplos
  defaultMessage: (req, res) => {
    return res.status(200).json({ info: 'Robsales API' })
  },

  listUsuarios: async (req, res) => {
    const usuarios = await db.Usuario.findAll()
    return res.status(200).json({ data: usuarios })
  },

  // Caso de uso login
  login: async (req, res) => {
    const [username, password] = [req.body.username, req.body.password]

    if (_.isNil(username) || _.isNil(password)) return res.boom.badRequest('blank_username_or_password')

    const usuario = await db.Usuario.findUserWithPwd(username, password)

    if (_.isNil(usuario)) {
      return res.boom.unauthorized('wrong_username_or_password')
    } else {
      return res.status(200).json({ token: jwt.sign({ username: req.body.username }, process.env.SECRET_KEY) })
    }
  },

  signup: async (req, res) => {
    const [username, password, cpf, name] = [req.body.username, req.body.password, req.body.cpf, req.body.name]

    console.log(username, password, cpf, name)
    if (_.isNil(username) || _.isNil(password) || _.isNil(cpf) || _.isNil(name)) return res.boom.badRequest('blank_fields')

    try {
      const result = await db.Usuario.bulkCreate([{ username, password, cpf, nome: name }])
      return res.status(200).json(result)
    } catch (err) {
      return res.boom.forbidden('username_or_cpf_already_registered')
    }
  }
}
