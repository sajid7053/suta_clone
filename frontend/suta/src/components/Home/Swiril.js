//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'
import Swirsingle from './Swirilsingle'
import { Link } from 'react-router-dom';
//exporting the class component
export default class Swiril extends Component {
  constructor() {
		super();
		this.state = {
			list: null
		}
	}
	componentDidMount() {
		var accessTokenObj = JSON.parse(localStorage.getItem("user-info"));
		fetch("http://localhost:5000/category?category=swiril", {
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
		// this.props.history.replace('/home')
	}
  render() {
    return (
      <div>
        <section id="Swirl-section">
          {/* <!--Different Swirl for hanging the dress and curtains --> */}
          <h4>SWIRL, SWAY AND SET FIRE</h4>
          <div>
            <button className="button-text">ONE OF A KIND</button>
            <button className="button-text">PURBO KAHINI</button>
          </div>
          {this.state.list ?
          <div className="container flex">
            {this.state.list.map(item => <Swirsingle productimage={item.image} productname={item.productname} price={item.price} />)}
          </div>
          :<p>Please wait</p>}
          <Link to='/swiril'><button className="btn" type="submit">VIEW ALL PRODUCTS</button></Link>
        </section>

        <hr></hr>
      </div>
    )
  }
}
