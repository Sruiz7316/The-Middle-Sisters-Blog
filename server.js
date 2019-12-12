const express = require('express')
const bodyParser = require('body-parser')
const staticServer = require('express-static')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000

// Makes code readable//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/mail', (req, res) => {
  console.log('should send email')
  req.status(200).end()
})

app.use(staticServer(path.join(__dirname, 'public')))

app.listen(PORT, function () {
  console.log('App listening on PORT:', PORT)
})

module.exports = app
