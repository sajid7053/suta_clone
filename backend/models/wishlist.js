const Mongoose = require('mongoose');
const { Schema } = Mongoose;
const productSchema = require('./productModel')
const userSchema = require('./userModel')

// Wishlist Schema
const WishlistSchema = new Schema({
  product: [{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'productSchema',
    required: true
  }],
  user: [{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'userSchema',
    required: true
}],
  isLiked: {
    type: Boolean,
    default: false
  },
},
{
  timestamps:true,
}
);

module.exports = Mongoose.model('Wishlist', WishlistSchema);