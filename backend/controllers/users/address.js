//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Address = require('../../models/addressModel')
const authenticateToken = require('../../middleware/authenticateuser')
// create a product to products collections

app.post('/adduseraddress',authenticateToken ,(req, res) => {
    const user_id = req.body.user_id
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;

    const useraddress = new Address({
         _id: user_id,
         address:address,
         city:city,
         state:state,
         pincode:pincode
    });
    useraddress
      .save()
      .then(result => {
        res.status(201).json({
          message: " address is added",
          createdUser: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
})

app.get('/useraddress/:user_id?', authenticateToken, async (req, res) =>{
  // const {productname,price,description,image,category,quantity,rating}=req.query
  
  const addressDetails = await Address.find();

  if(!addressDetails) {
      res.status(500).json({success: false})
  } 
  res.status(200).send(addressDetails);
})

app.delete("/useraddress/:id", authenticateToken ,async (req, res, next) => {
    // path params 
    const _id = req.params.id
    // by using remove(), delete product with the help of product id
    Address.remove({_id}).exec().then(result => {
        // after remove response is product deleted successfully
        res.status(200).json({message : "user address deleted successfully"})
        
    }).catch(err =>{
        // if it fails to dekete means status is 500 and response is error
        res.status(500).json({
            error : err
        })
    })
    
  });
// exporting the api
module.exports = app