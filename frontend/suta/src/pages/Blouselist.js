import React, { Component } from 'react'
import Blouselist from '../components/ProductList/blouselist'
import Header from '../components/Header/header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
export default class productlistone extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Blouselist />
                <Footer />
            </div>
        )
    }
}