const express = require('express')
const bodyParser = require('body-parser')
const boom = require('express-boom')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())        // corpo JSON
app.use(bodyParser.urlencoded({   // attr URI
  extended: true
}))

// Error handling
app.use(boom())

// Enable Cross-Origin
app.use(cors())

// Routes
require('./api/routes')(app)

// React App
const opt = { root: __dirname }
// Serve static files from the React frontend app
app.use(express.static('client/build', opt))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile('client/build/index.html', opt)
})

// Path join _dirname is necessary

// Start server on port
app.listen(port, () => {
  if (process.env.NODE_ENV !== 'production')
    console.log(`App running on port ${port}.`)
})
