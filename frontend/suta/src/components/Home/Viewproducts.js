//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'

//exporting the class component
export default class viewproducts extends Component {
  render() {
    return (
      <div>
        {/* <!--Cateogry products--> */}
        <section id="category-section">
          <div className="container flex">
            <div className="category">
              <img className='category-img' src="//cdn.shopify.com/s/files/1/0026/6544/7536/files/collection_list_to_be_uploaded_first_750x800_crop_center.jpg?v=1626359843 750w" alt="category Sarees" />
              <p className="para">EK HAZARO ME <br />MERE BHAIYA HAI</p>
              <button className="viewbtn">VIEW PRODUCTS</button>
            </div>
            <div className="category">
              <img className='category-img' src="//cdn.shopify.com/s/files/1/0026/6544/7536/files/collection_list_banner_7f74e7d4-0f68-4b27-ac3e-a97340de98c8_750x800_crop_center.jpg?v=1626098874 750w" alt="category Sarees" />
              <p className="para">EK NADI</p>
              <button className="viewbtn">VIEW PRODUCTS</button>
            </div>
            <div className="category">
              <img className='category-img' src="//cdn.shopify.com/s/files/1/0026/6544/7536/files/collection_list_copy_191e6db6-31d5-4520-b3c8-0a2772943cce_750x800_crop_center.jpg?v=1625457541 750w" alt="category Sarees" />
              <p className="para">NOT SO SANSKAARI <br />NAARI</p>
              <button className="viewbtn">VIEW PRODUCTS</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}