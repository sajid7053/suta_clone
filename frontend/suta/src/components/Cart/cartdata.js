//Importing React Components
import React, { Component } from 'react'
import CartFeature from './cartfeature'
import './cartpage.css'

//Lists of  data by users tweeets
const CartData = [
    {
        cartimg:"https://cdn.shopify.com/s/files/1/0026/6544/7536/products/envelope-799485_400x.jpg?v=1626423742",
        cartname:"ENVELOPE",
        cartcost:"RS. 820",
        
    },
    {
        cartimg:"https://cdn.shopify.com/s/files/1/0026/6544/7536/products/ode-to-greens-851359_400x.jpg?v=1610776908",
        cartname:"ODE TO GREENS (SAREE)",
        cartcost:"RS. 1,620",
       
    },
 
]

class CartContainer extends Component {
  render() {
    return (
  
      <div >
         {/* <!--- The map() function is used to get the trending the tweets of data to the DOM.--> */} 
        {CartData.map(item => <CartFeature  cartimg={item.cartimg} cartname={item.cartname} cartcost={item.cartcost}  />)}
      </div>
    )
  }
}
export default CartContainer