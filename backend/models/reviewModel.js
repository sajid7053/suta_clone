const mongoose =require('mongoose')

//Giving the key and values of review product
const reviewSchema = mongoose.Schema(
    {
      product_name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      email: { type: String, required: true}
    },
    {
      timestamps: true, //timestamp of product
    }
  )

//exporting the module 
module.exports = {reviewSchema}