const db = require('../models')
const _ = require('lodash')

module.exports = {
  // Exemplos
  defaultMessage: (req, res) => {
    return res.status(200).json({ info: 'Robsales API' })
  },
  
  listUsers: async (req, res) => {
    const users = await db.User.findAll()
    return res.status(200).json({ data: users })
  },

  findUser: async (req, res) => {
    const user = await db.User.findById(req.params.id)

    if (_.isNil(user)) {
      return res.status(404).json({ info: 'user_not_found' })
    } else {
      return res.status(200).json({ data: user })
    }
  },

  // Caso de uso login
  login: async (req, res) => {
    if (_.isNil(req.body.username) || _.isNil(req.body.username)) return res.status(400).json({ info: 'blank_username_or_password' })

    const user = await await db.User.findUserWithPwd(req.body.username, req.body.password)

    if (_.isNil(user)) {
      return res.status(404).json({ info: 'wrong_username_or_password' })
    } else {
      return res.status(200).json({ token: Buffer.from('loggedToken').toString('base64') })
    }
  }
}