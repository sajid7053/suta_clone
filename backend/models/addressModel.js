const mongoose =require('mongoose')
const Schema = mongoose.Schema;
// const reviewSchema = require('./reviewModel')
const userSchema = require('./userModel')

const addressSchema = new Schema({
    user_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userSchema',
      required: true
  }],
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
  },
  {
    timestamps: true,
  }
)

const Address = mongoose.model('Address', addressSchema)

module.exports = Address;