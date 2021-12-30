const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
const userController = require('./controllers/user.controller')
app.use('/smu-users', userController)

module.exports = app;