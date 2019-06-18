const jwt = require('jsonwebtoken')
const _ = require('lodash')

module.exports = {
  tokenValidator: (options) => (req, res, next) => {
    // Check if req is on a public route
    let publicRoute = false
    if (!_.isNil(options)) {
      options.unless.forEach(endpoint => {
        // Two types of exception: /route or /routes/*
        if (endpoint[endpoint.length-1] === '*') {
          let endp = endpoint.substring(0, endpoint.length - 2)
          if (req.url.startsWith(endp)) publicRoute = true
        } else {
          if (req.url === endpoint) publicRoute = true
        }
      })
    }

    // Split Bearer from token
    let tokens = _.split(req.headers.authorization, ' ')
    if (tokens.length !== 2 && tokens[0] !== 'Bearer' && !publicRoute) return res.status(401).send('invalid_username_or_password')

    // Try to parse
    let auth
    try {
      auth = jwt.verify(tokens[1], process.env.SECRET_KEY)
    } catch (err) {
      auth = null
    }
    
    if (_.isNil(auth) && !publicRoute) return res.status(401).send('invalid_username_or_password')

    req.headers.authorization = auth
    next()
  }
}