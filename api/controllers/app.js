const db = require('../models')
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
      return res.status(200).json({ token: Buffer.from('loggedToken').toString('base64') })
    }
  }
}
