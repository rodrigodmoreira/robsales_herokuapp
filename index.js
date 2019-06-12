const express = require('express')
const bodyParser = require('body-parser')
const boom = require('express-boom')
const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())        // corpo JSON
app.use(bodyParser.urlencoded({   // attr URI
  extended: true
}))

// Error handling
app.use(boom())

// Routes
require('./src/routes')(app)

// Start server on port
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
