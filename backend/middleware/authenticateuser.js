//Importing the express modules
const express = require("express");
const jwt = require("jsonwebtoken");
//importing the express module
const app = express();
app.use(express.json());

// Authentication Middleware
const authenticateToken = (request, response, next) => {
    let jwtToken;
    const {authorization} = request.headers //geneating the application/json 
    if (authorization !== undefined) {//Generating the Token 
        jwtToken = authorization.replace("Bearer ","")
    }
    if (jwtToken == undefined) {
        response.status(401) //If token is not generated
        response.send("Invalid jwt Token")
    } else {
        jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => { //Verfying the token
            if (error) {
                response.status(401)
                response.json("Invalid jwt Toke")
            } else {
                next()
            }
        })
    }
}

//Exporting the jwt token
module.exports = authenticateToken