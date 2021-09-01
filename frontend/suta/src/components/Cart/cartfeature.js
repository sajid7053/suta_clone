import React, { Component } from 'react'
import './cartpage.css'
import './cartdata'
export default class cartfeature extends Component {
    render() {
        return (
            <div>
                 <div className="sc-cc">
                <div className="sc-cont-re">
                    <div className="sc-cont1-re">
                        <img src= {this.props.cartimg} className="sc-img-re" alt="images" />
                        <p className="sc-para-re">{this.props.cartname}</p>
                        <p className="sc-para-re">{this.props.cartcost}</p>

                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}
