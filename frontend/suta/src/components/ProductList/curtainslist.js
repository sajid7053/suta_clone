// importing react component
import React, { Component } from 'react'
// importing css file and other components
import './productlistpage.css'
import Singleproduct from './singleproduct'
import { Link } from 'react-router-dom';

// exporting class component of productlist
export default class productlist extends Component {
  constructor() {
		super();
		this.state = {
			list: null
		}
	}
	componentDidMount() {
		var accessTokenObj = JSON.parse(localStorage.getItem("user-info"));
		fetch("http://localhost:5000/category?category=curtain", {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${accessTokenObj.Token}`,
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true
			},
		}).then((resp) => {
			resp.json().then((result) => {
				this.setState({ list: result })
				console.log(this.state)
			})
		})
	}


  render() {
    return (
      <div>
      {/* sidebar section of the productlist page */}
        <section className="all-section">
          <h4>ALL Curtains</h4>
          <div className="container">
          <Link to='/home'> <p>Home/Curtains</p></Link>
            <div className="sidebar">
              <p>FABRIC</p>
              <br />
              <ul>
                <li>Mul Cotton</li>
         
              </ul>
              
              <br />
              <p>TYPE</p>
              <br />
              <ul>
                <li>Plain</li>
                <li>Ruffels</li>
             
              </ul>
              <br />
              <h3>COLORS</h3>
              <br />
              <div className="buttons">
                <button type="button" className="clrbtn1"></button>
                <button type="button" className="clrbtn2"></button>
                <button type="button" className="clrbtn3"></button>
                <button type="button" className="clrbtn4"></button>
                <button type="button" className="clrbtn5"></button>
                <button type="button" className="clrbtn6"></button>
              </div>
            </div>
          </div>
        </section>

        {/*using map function for product of productlist page in category section */}
        <section className="product1">
        {this.state.list ?
          <div className="productlist">
          {this.state.list.map(item => <Singleproduct  productimage={item.image} productname={item.productname} noofproduct={item.quantity} price={item.price} />
                )}
          </div>
         	:<p>Please wait</p>}
        </section>
        <section className="product1">
        {this.state.list ?
          <div className="productlist">
          {this.state.list.map(item => <Singleproduct  productimage={item.image} productname={item.productname} noofproduct={item.quantity} price={item.price} />
                )}
          </div>
            	:<p>Please wait</p>}
        
        </section>
      </div>
    );
  }
}