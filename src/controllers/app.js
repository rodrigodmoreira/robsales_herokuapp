const Services = require('../services')

module.exports = {
  // Exemplos
  defaultMessage: (req, res) => {
    return res.status(200).json({ info: 'Robsales API' })
  },

  listUsuarios: async (req, res) => {
    const sres = await Services.Usuario.listUsuarios(res)
    return sres
  },

  // Caso de uso login
  login: async (req, res) => {
    const sres = await Services.Usuario.login(req.body.username, req.body.password, res)
    console.log(sres)
    return sres
  }
}
