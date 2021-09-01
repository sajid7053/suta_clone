//Importing the mongoose 
const mongoose = require('mongoose')

//Connecting the mongodb cloud application
const URI = "YOUR MONGO CLOUD URI"

const connectDB = async() => {//awaiting the async functions
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    console.log("db connected")
}

//exporting the module of mongodb
module.exports = connectDB;