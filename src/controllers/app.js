const db = require('../models')
const _ = require('lodash')
const Services = require('../services')

module.exports = {
  // Exemplos
  defaultMessage: (req, res) => {
    return res.status(200).json({ info: 'Robsales API' })
  },
  
  listUsers: async (req, res) => {
    try {
      const sres = await db.User.findAll()
      return res.status(200).json(sres)
    } catch (err) {
      return err
    }
  },

  findUser: async (req, res) => {
    try {
      const sres = await Services.User.findUser(req.params.id)
      return res.status(200).json(sres)
    } catch (err) {
      return err
    }
  },

  // Caso de uso login
  login: async (req, res) => {
    try {
      const sres = await Services.User.login(req.body.username, req.body.password)
      return res.status(200).json(sres)
    } catch (err) {
      return err
    }
  }
}