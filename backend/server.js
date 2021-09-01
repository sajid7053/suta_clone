const express = require('express')
let app = express()
app.use(express.json())
const mongoose = require("mongoose");
const connectDB = require('./DB/Connection')
const cors= require("cors")
app.use(cors())
connectDB()
// let header = new Headers();
// header.append("Access-Control-Allow-Origin: http://localhost:3000");
// header.append('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header.append("Access-Control-Allow-Headers: Content-Type, Authorization");

// initialzation of the server
const initializeServer = () => {
    try {
        app.listen(5000, () => {
        console.log("Server Running at http://localhost:5000")
        })
    } catch (e) {
        console.log(`DB Error: ${e.message}`)
        process.exit(1)
    }
};

// starting the server
initializeServer()

function routeAll() {
    //authication
app.use(require('./controllers/auth/index'))

// product Api
app.use(require('./controllers/products/index'))

// useraddress api
app.use(require('./controllers/users/index'))
    
//whistlist Api
app.use(require('./controllers/orders/index'))

}



routeAll()