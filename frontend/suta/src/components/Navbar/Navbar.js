import React, { Component } from 'react'
import './Navbar.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import history from '../../history'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false,
            search: '',
            isuserlogged : false
        }
    }
    componentDidMount(){
        let isuserinfo = (localStorage.getItem('user-info'))
        // console.log(isuserlogged)
        if (isuserinfo){
            this.setState({
                isuserlogged : true
            })
        }
   }

   onLogout = () =>{
       localStorage.removeItem('user-info')
       this.setState({
           isuserlogged : false
       })
       
   }
    componentWillRecieveProps(nextProps) {
        this.setState({ fireRedirect: false })
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({ fireRedirect: true })
    }
    searchText= (e) => {
        this.setState({ search: e.target.value})
    }
    render() {
        const { fireRedirect } = this.state
        let isuserloggedin = this.state.isuserlogged
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-container">
                        <div className="arrow-icon">
                            <h3>INR <ArrowDropDownIcon /></h3>
                        </div>
                        <div className="navbar-logo">
                            <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/files/Suta_logo_high_resolution_hq_140x.png?v=1609591010" alt="images" />
                        </div>
                        <div className="menu-icon" onClick={() => { this.setState({ click: true }) }}>
                            {this.state.click ? <CloseIcon /> : <MenuIcon />}
                        </div>
                        <div className="navbar-right">
                            <form onSubmit={this.submitForm}>
                                <div id="search-bar" className="navbar-search">
                                    <SearchIcon onClick={this.submitForm}/>
                                    <input type="text" id='search' onChange={this.searchText} />
                                </div>
                            </form>
                            {fireRedirect && (
                                        <Redirect to={"/" + this.state.search} />
                                        )}

                            <div className="navbar-icons">
                                <Link to='/login'><PersonIcon /></Link>
                                <FavoriteIcon />
                                <LocalMallIcon />
                                <PinterestIcon />
                            </div>
                            {/* {isuserloggedin ? <button className="logout-button" onClick = {this.onLogout}>Logout</button> : <Redirect to={"/" + this.state.pages}/> } */}
                
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}