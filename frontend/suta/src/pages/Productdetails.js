import React, { Component } from 'react'
import Productdetails from '../components/ProductDetails/productdetails'
import Header from '../components/Header/header'
import Nav from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'

export default class productdetailsone extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Nav/>
                <Productdetails/>
                <Footer/>
            </div>
        )
    }
}
