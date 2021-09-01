import React, { Component } from 'react'
import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';
import HomeScreen from './HomeScreen'
import Productlistone from './Productlist'
import Curtainlistone from './Curtainslist'
import Blouselistone from './Blouselist'
import Swirillistone from './Swirillist'
import Loginone from './loginone';
import Signup from '../components/Signup/signup';
import Cartone from './cartone';
import Productdetailsone from './Productdetails';
import history from '../history';
// import  { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom'

export default class RoutePath extends Component {
    render() {
        return (
            <>
               {/*Routing into other application pages */}
                <BrowserRouter history={history}>
                    <Switch>
                        <Route path = '/saree'  component = {Productlistone} />
                        <Route path = '/curtains'  component = {Curtainlistone} />
                        <Route path = '/blouse'  component = {Blouselistone} />
                        <Route path = '/swiril'  component = {Swirillistone} />
                        <Route path = '/home'  component = {HomeScreen} />
                        <Route path = '/login'  component = {Loginone} />
                        <Route path = '/register' component = {Signup} />
                        <Route path = '/cart'  component = {Cartone} /> 
                        <Route path = '/detail'  component = {Productdetailsone} /> 
                       <Redirect to='/'></Redirect>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}