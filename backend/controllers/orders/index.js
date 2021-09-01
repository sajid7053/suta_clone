//importing the module express
var express = require('express')
const mongoose = require('mongoose')

var app = express()
app.use(express.json())

//Calling the apis
app.use(require('./postwishlist'))
app.use(require('./getwishlist'))

//cart api's
const addCart = require('./addItemsCart')
app.post('/addcart', addCart.addItemToCart)
app.get('/getcart', addCart.getCart)
app.delete('/deletecart', addCart.emptyCart )

//exporting the module app
module.exports = app