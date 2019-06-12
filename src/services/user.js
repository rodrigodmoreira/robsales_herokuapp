const db = require('../models')
const _ = require('lodash')

module.exports = {
  // Exemplos
  listUsers: async (res) => {
    const users = await db.User.findAll()
    return res.status(200).json({ data: users })
  },

  findUser: async (userId, res) => {
    const user = await db.User.findById(userId)

    if (_.isNil(user)) {
      return res.boom.notFound('user_not_found')
    } else {
      return res.status(200).json({ data: user })
    }
  },

  // Caso de uso login
  login: async (username, password, res) => {
    if (_.isNil(username) || _.isNil(password)) return res.boom.badRequest({ info: 'blank_username_or_password' })

    const user = await await db.User.findUserWithPwd(username, password)

    if (_.isNil(user)) {
      return res.boom.unauthorized('wrong_username_or_password')
    } else {
      return res.status(200).json({ token: Buffer.from('loggedToken').toString('base64') })
    }
  }
}
