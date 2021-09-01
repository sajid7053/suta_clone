import React, { Component } from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

export default class singleproductdetails extends Component {
    render() {
        return (
                <div className="content">
                    <h2 className="name">{this.props.productname}</h2>
                    <div className="rating">
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        {this.props.quantity}
                    </div>
                    <p className="brand">SKU:<span>SUTAACR04</span></p>
                    <p><span>Rs. {this.props.price}</span></p>
                </div>
        )
    }
}
