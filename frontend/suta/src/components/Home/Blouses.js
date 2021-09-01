//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'
import Blousesaree from './Blousesingleproduct'
import { Link } from 'react-router-dom';
//exporting the class component
export default class blouses extends Component {
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
				// alert("User successfully registered")
				this.setState({ list: result })
				console.log(this.state)
			})
		})
		// this.props.history.replace('/home')
	}
  render() {
    return (
      <div>
        <section id="Blouses-section">
          {/* <!--Blouses for matching sarees--> */}
          <h4>REFLECT YOUR MOOD</h4>
          <h1>ALL BLOUSES</h1>
          {this.state.list ?
          <div className="container flex">
            {this.state.list.map(item => <Blousesaree productimage={item.image} productname={item.productname} noofproduct={item.quantity} price={item.price} sizes={item.sizes} />)}
          </div>
          :<p>Please wait</p>}
          <Link to='/blouse'><button className="btn" type="submit">VIEW ALL BLOUSES</button></Link>
        </section>

        <hr></hr>
      </div>
    )
  }
}
