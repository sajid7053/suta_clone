//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Productimage = require('../../models/imageModels')
const authenticateToken = require('../../middleware/authenticateuser')
// create a product to products collections

app.post('/addimage',authenticateToken ,(req, res) => {
    const image = req.body.image;

    const productimage = new Productimage({
         _id: new mongoose.Types.ObjectId(),
         image:image,
    });
    productimage
      .save()
      .then(result => {
        res.status(201).json({
          message: "productimage is created",
          createdUser: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
})

app.get('/allimage', authenticateToken, async (req, res) =>{
    const imageList = await Productimage.find(req.query);

    if(!imageList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(imageList);
})

// exporting the api
module.exports = app