import React, { Component } from 'react'
import './loginpage.css'
// import axios from 'axios'
import history from '../../history'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router'


export default class login extends Component {
    constructor() {
        super()
        this.state = {
            email: null,
            password: null
        }
    }
    login() {
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((result) => {
                // alert("User successfully registered")
                console.log(result)
                if(result){
                    history.push('/home')
                }
                localStorage.setItem("user-info",JSON.stringify(result))
            })
        })
    }
    render() {
        return (
            <div>
                {/* Login Page */}
                <div className="logmain-cont">
                    <div className="logcont-22">
                        <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/78/assets/flower_02.png?v=2914041889861923356" alt="images" className="logsm-img" />
                        <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/t/78/assets/suta_ladies.png?v=18027341706003107149" alt="images" className="logcont-im" />
                    </div>
                    <div className="logcont1">
                        <h1>Login</h1>
                        <p>Please enter your e-mail and password:</p>
                        <div className="logcont2">
                        <input type="text" placeholder="Email" className="login-el" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <input type="password" placeholder="Password" className="login-el" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <button className="login-but" onClick={() => {this.login()}}>Login</button>
                        </div>
                        <p className="logpara">Don't have an account? <Link to='/register'>Create one</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}
