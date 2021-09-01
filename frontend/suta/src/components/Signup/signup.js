// import axios from 'axios'
import React, { Component } from 'react'
import './signuppage.css'
import history from '../../history'
export default class signup extends Component {
    constructor() {
        super()
        this.state = {
            fname: null,
            lname: null,
            email: null,
            password: null
        }
    }
    register() {
        fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // alert("User successfully registered")
                console.log(result)
            })
        })
        this.props.history.replace('/home')
    }
    render() {
        return (
            <div>
                {/* Signup Page */}
                <div className="logmain-cont">
                    <div className="logcont-22">
                        <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/78/assets/flower_02.png?v=2914041889861923356" alt="images" className="logsm-img" />
                        <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/78/assets/suta_ladies.png?v=18027341706003107149" alt="images" className="logcont-im" />
                    </div>
                    <div className="signup-form">

                        <h1>REGISTER</h1>
                        <p>Please fill in the information below:</p>
                        <div className="signup-con">
                            <input type="text" placeholder="First name" className="signup-el" onChange={(e) => { this.setState({ fname: e.target.value }) }} />
                            <input type="text" placeholder="Last name" className="signup-el" onChange={(e) => { this.setState({ lname: e.target.value }) }} />
                            <input type="text" placeholder="Email" className="signup-el" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <input type="password" placeholder="Password" className="signup-el" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <button className="signup-but" onClick={() => {this.register()}}>CREATE NEW ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
