//Importing the express modules
var express = require('express')
const mongoose = require('mongoose')

var app = express()
app.use(express.json())

//Routhing the apis
app.use(require('./createProduct'))
app.use(require('./categoryProduct'))

app.use(require('./productImage'))

app.use(require('./deleteProduct'))
app.use(require('./categoryAllProduct'))

//Exporting the module app

module.exports = app