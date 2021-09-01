//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'
import Sareesingleproduct from './Sareesingleproduct'
import { Link } from 'react-router-dom';
//exporting the class component
export default class sarees extends Component {
	constructor() {
		super();
		this.state = {
			list: null
		}
	}
	componentDidMount() {
		var accessTokenObj = JSON.parse(localStorage.getItem("user-info"));
		fetch("http://localhost:5000/category?category=saree", {
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
				
				<section id="sarees-section">
					{/* <!--Different types of sarees --> */}
					<h1>SAREES</h1>
					{this.state.list ?
					<div className="container flex">

						{this.state.list.map(item => <Sareesingleproduct productimage={item.image} productname={item.productname} noofproduct={item.quantity} price={item.price} />
						)}
					</div>
					:<p>Please wait</p>}
					<Link to='/saree'><button className="btn" type="submit">VIEW ALL SAREES</button></Link>
				</section>

				<hr></hr>
			</div>
		)
	}
}