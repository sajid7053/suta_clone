//Importing packages
const express = require('express')
//Importing the express modules
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser') //Importing the authentication token

//Getting the all products of list
app.get('/categoryAll', authenticateToken, async (req, res) =>{
    
    const categoryList = await Product.find(); //Finding the products of all category list

    if(!categoryList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(categoryList);
})
// exporting the api
module.exports = app