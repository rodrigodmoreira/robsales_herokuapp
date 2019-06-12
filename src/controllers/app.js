const Services = require('../services')

module.exports = {
  // Exemplos
  defaultMessage: (req, res) => {
    return res.status(200).json({ info: 'Robsales API' })
  },

  listUsers: async (req, res) => {
    const sres = await Services.User.listUsers(res)
    return sres
  },

  findUser: async (req, res) => {
    const sres = await Services.User.findUser(req.params.id, res)
    return sres
  },

  // Caso de uso login
  login: async (req, res) => {
    const sres = await Services.User.login(req.body.username, req.body.password, res)
    return sres
  }
}
