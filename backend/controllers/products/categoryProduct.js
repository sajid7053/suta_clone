//Importing packages
const express = require('express')
//Importing the express modules
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
const authenticateToken = require('../../middleware/authenticateuser') //Importing the authentication token

//Method for to get category product
app.get('/category/:category?', authenticateToken, async (req, res) =>{

    const {productname,price,description,image,category,quantity,rating}=req.query
    
    const categoryList = await Product.find(req.query);

    //to fetch the particular product
    // const categoryList = await Product.find({ category: req.query.category });


    if(!categoryList) {//If category method is wrong
        res.status(500).json({success: false})
    } 
    res.status(200).send(categoryList);
})

// app.get('/category/:id', authenticateToken, async (req, res) =>{
//     const { productId } = req.params;
//   if (productId) {
//     Product.findOne({ _id: productId }).exec((error, product) => {
//       if (error) return res.status(400).json({ error });
//       if (product) {
//         res.status(200).json({ product });
//       }
//     });
//   } else {
//     return res.status(400).json({ error: "Params required" });
//   }
// })
// exporting the api
module.exports = app