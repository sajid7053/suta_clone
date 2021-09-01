//Importing packages
const express = require('express')
//Importing the express modules
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const Wishlist = require('../../models/wishlist')
//importing the jwt token
const authenticateToken = require('../../middleware/authenticateuser')

//gets the wishlist content
// fetch wishlist api
app.get('/getwishtlist', authenticateToken, async (req, res) => {
  try {
    const user = req.user._id;

    const wishlist = await Wishlist.find({ user, isLiked: true })
      .populate({
        path: 'product',
        select: 'name slug price imageUrl'
      })
      .sort('-updated');

    res.status(200).json({
      wishlist
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});


//Exporting the module app
module.exports = app