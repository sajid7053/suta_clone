//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require('../../models/userModel')


//signup user api
app.post("/signup", async (req, res, next) => {
    const {email} = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // search for user is already exists
    const isUserFound = await User.findOne({email})
    
    // if user is already exists
    if(isUserFound){
        res.status(400).json({message : "user is already existed"})
    }else{
      // is user is not exists then proceed to signup
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
        });
    
        // posting the new user to the collections
        user
          .save()
          .then(result => {
            // console.log(result);
            res.status(201).json({
              message: "user is succesfully registered",
              createdUser: result
            });
          })
          // if get any error show that error
          .catch(err => {
            res.status(500).json({
              error: err
            });
          });
    }
    
  });

// exports the api
module.exports = app