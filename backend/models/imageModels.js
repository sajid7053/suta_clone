const mongoose =require('mongoose')
const Schema = mongoose.Schema;
// const reviewSchema = require('./reviewModel')

const productimageSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    image: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true,
  }
)

const Productimage = mongoose.model('Productimage', productimageSchema)

module.exports = Productimage;