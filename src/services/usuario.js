const db = require('../models')
const _ = require('lodash')

module.exports = {
  // Exemplos
  listUsuarios: async (res) => {
    const usuarios = await db.Usuario.findAll()
    return res.status(200).json({ data: usuarios })
  },

  // Caso de uso login
  login: async (username, password, res) => {
    if (_.isNil(username) || _.isNil(password)) return res.boom.badRequest({ info: 'blank_username_or_password' })

    const usuario = await db.Usuario.findUserWithPwd(username, password)
    console.log(usuario)

    if (_.isNil(usuario)) {
      return res.boom.unauthorized('wrong_username_or_password')
    } else {
      return res.status(200).json({ token: Buffer.from('loggedToken').toString('base64') })
    }
  }
}