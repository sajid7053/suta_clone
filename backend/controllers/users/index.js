var express = require('express')
const mongoose = require('mongoose')

var app = express()
app.use(express.json())

app.use(require('./address'))

module.exports = app