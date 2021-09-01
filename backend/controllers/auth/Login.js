//Importing packages
const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require('../../models/userModel')


//login user api
//login user api
app.post('/login',(req,res)=>{
    const {email, password} = req.body
    // if(!email || !password){
    //     return res.status(422).json({error:"please add email or password"})
    // }
    User.findOne({email:email})
        .then(savedUser =>{
            //it will check the email is present or not
            if (!savedUser) {
                return res.json({error:"Invalid Email or password"})
            }
            else{
                //email is present password comparision using bcrypt method
                const domatch = bcrypt.compare(password,savedUser.password)
                if (domatch) {//true
                    //return res.json({message: "successfully login"})
                    const payload = {email: email}
                    const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN")
                    res.send({savedUser, "Token" : jwtToken  });
                }
                else {
                    return res.json({error:"Invalid Email or password"})
                }
            }
        })
})

// exports the api
module.exports = app