import React, { Component } from 'react'
import Carousel from '../components/Home/Carousel'
import Viewproducts from '../components/Home/Viewproducts'
import Sarees from '../components/Home/Sarees'
import Blouses from '../components/Home/Blouses'
import Curtains from '../components/Home/Curtains'
import Swiril from '../components/Home/Swiril'
import Stories from '../components/Home/Stories'
import Feature from '../components/Home/Feature'
import Header from '../components/Header/header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import '../components/Home/homepage.css'

export default class homeone extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <Carousel></Carousel>
                <Viewproducts></Viewproducts>
                <Sarees></Sarees>
                <Blouses></Blouses>
                <Curtains></Curtains>
                <Swiril></Swiril>
                <Stories></Stories>
                <Feature></Feature>
                <Footer/>

            </div>
        )
    }
}
