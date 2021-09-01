import React, { Component } from 'react'
import Curtainslist from '../components/ProductList/curtainslist'
import Header from '../components/Header/header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
export default class productlistone extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Curtainslist />
                <Footer />
            </div>
        )
    }
}