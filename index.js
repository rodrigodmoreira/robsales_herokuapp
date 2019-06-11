const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware
app.use(bodyParser.json())        // corpo JSON
app.use(bodyParser.urlencoded({   // attr URI
  extended: true
}))

// Routes
require('./src/routes')(app)

// Start server on port
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
