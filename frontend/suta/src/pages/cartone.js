import React, { Component } from 'react'
import Header from '../components/Header/header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import Cart from '../components/Cart/cart'
import Cartfeature from '../components/Cart/cartfeature'
export default class cartone extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <Cart/>
                <Cartfeature/>
                <Footer/>
            </div>
        )
    }
}
