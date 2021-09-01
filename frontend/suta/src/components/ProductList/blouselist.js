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
		fetch("http://localhost:5000/category?category=blouse", {
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
          <h4>ALL Blouses</h4>
          <div className="container">
          <Link to='/home'> <p>Home/All Blouses</p></Link>
            <div className="sidebar">
              <p>SLEEVES</p>
              <br />
              <ul>
                <li>Bell Sleeves</li>
                <li>Elbow length Sleeves</li>
                <li>Full Sleeves</li>
                <li>Half Sleeves</li>
                <li>Kaftan Sleeves</li>
                <li>Long Sleeves</li>
                <li>Off Shoulder</li>
                <li>One Shoulder</li>
                <li>Puffed Sleeves</li>
                <li>Ruffle Sleeves</li>
                <li>Short Sleeves</li>
                <li>Sleeveless</li>
                <li>Spaghetti Sleeves</li>
              </ul>
              
              <br />
              <p>BLOUSE TYPE</p>
              <br />
              <ul>
                <li>Basics</li>
                <li>Made to order</li>
                <li>Non Padded</li>
                <li> Padded</li>
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