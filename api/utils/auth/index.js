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
    if (publicRoute) next()

    // Split Bearer from token
    if (_.isNil(req.headers.authorization) && _.isNil(req.query.token)) return res.status(401).send('invalid_token')
    
    let tokens = _.split(req.headers.authorization, ' ')
    if (tokens.length !== 2 && tokens[0] !== 'Bearer' && _.isNil(req.query.token)) return res.status(401).send('invalid_token')

    // Try to parse
    let auth
    try {
      auth = jwt.verify(tokens[1], process.env.SECRET_KEY)
    } catch (err) {
      auth = null
    }
    // Optional parse with token from query
    if (auth !== true && !_.isNil(req.query.token)) {
      try {
        auth = jwt.verify(req.query.token, process.env.SECRET_KEY)
      } catch (err) {
        auth = null
      }
    }
    console.log(auth)
    
    if (_.isNil(auth)) return res.status(401).send('invalid_token')

    req.headers.authorization = auth
    next()
  }
}