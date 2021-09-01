//Importing the mongoose db
const mongoose =require('mongoose')
const Schema = mongoose.Schema;

//Giving the key and values of product category 
const productSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    productname: {
      type: String,
      required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true 
    },
    category: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      required: true 
    },
  },
  {
    timestamps: true,
  }
)

//Exproting the product category 
const Product = mongoose.model('Product', productSchema)

module.exports = Product;