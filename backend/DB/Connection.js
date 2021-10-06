//Importing the mongoose 
const mongoose = require('mongoose')

//Connecting the mongodb cloud application
const URI = "mongodb+srv://sajid_01:sajid_01@cluster0.lsme9.mongodb.net/suta?retryWrites=true&w=majority"

const connectDB = async() => {//awaiting the async functions
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    console.log("db connected")
}

//exporting the module of mongodb
module.exports = connectDB;
