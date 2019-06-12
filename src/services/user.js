const db = require('../models')
const _ = require('lodash')
const Boom = require('boom')

module.exports = {
  // Exemplos
  listUsers: async () => {
    const users = await db.User.findAll()
    return { data: users }
  },

  findUser: async (userId) => {
    const user = await db.User.findById(userId)

    if (_.isNil(user)) {
      throw Boom.notFound('user_not_found')
    } else {
      return { data: user }
    }
  },

  // Caso de uso login
  login: async (username, password) => {
    if (_.isNil(username) || _.isNil(username)) throw Boom.badRequest({ info: 'blank_username_or_password' })

    const user = await await db.User.findUserWithPwd(username, password)

    if (_.isNil(user)) {
      throw Boom.unauthorized('wrong_username_or_password')
    } else {
      return { token: Buffer.from('loggedToken').toString('base64') }
    }
  }
}