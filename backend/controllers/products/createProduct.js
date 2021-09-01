//Importing packages
const express = require('express')
//Importing the express modules
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Product = require('../../models/productModel')
//Importing the Jwt token
const authenticateToken = require('../../middleware/authenticateuser')

// create a product to products collections
app.post('/addproduct',authenticateToken ,(req, res) => {
  //Requesting the body params of products
    const productname = req.body.productname
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    const category = req.body.category;
    const quantity = req.body.quantity;
    const rating = req.body.rating;

    //Implementing the new products 
    const product = new Product({
         _id: new mongoose.Types.ObjectId(),
         productname:productname,
         price:price,
         description:description,
         image:image,
         category:category,
         quantity:quantity,
         rating:rating,
    });
    product
      .save()
      .then(result => {//After adding the new product result of status
        res.status(201).json({
          message: "product is created",
          createdUser: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
})

// exporting the api
module.exports = app