//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'
import CurtSingle from './Curtainssingle'
import { Link } from 'react-router-dom';
//exporting the class component
export default class Curtains extends Component {
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
        <section id="Curtains-section">
          {/* <!--Different Curtains for home windows --> */}
          <h4>UNASSUMING YARDS OF LOVE</h4>
          <div>
            <button className="button-text">CURTAINS</button>
            <button className="button-text">DUPATTAS</button>
          </div>
          {this.state.list ?
          <div className="container flex">
            {this.state.list.map(item => <CurtSingle productimage={item.image} productname={item.productname} noofproduct={item.noofquantity} price={item.price} sizes={item.sizes} />)}
          </div>
          :<p>Please wait</p>}
          <Link to='/curtains'><button className="btn" type="submit">VIEW ALL PRODUCTS</button></Link>
        </section>

        <hr></hr>
      </div>
    )
  }
}
