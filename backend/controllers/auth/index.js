//Importing the express modules
var express = require('express')
const mongoose = require('mongoose')

var app = express()
app.use(express.json())

//routing the all apis in single js file

app.use(require('./Register'))
app.use(require('./Login'))


 app.use(require('./Logout'))




//exporting the module app

module.exports = app