// Importing packages
const mongoose =require('mongoose')
const Schema = mongoose.Schema;

//Giving the key and values of review product
const Userschema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fname:{
        type: String,
        required : true
    },
    lname:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required : true
    },
});

//Exporting the module
const User = new mongoose.model("users",Userschema);

module.exports = User;