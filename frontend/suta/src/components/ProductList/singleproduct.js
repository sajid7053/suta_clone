// importing react component
import React, { Component } from 'react'
import './productlistpage.css'
import StarRateIcon from '@material-ui/icons/StarRate';

// class component for singleproduct
export default class singleproduct extends Component {
    render() {
        return (
            // using props for the repeated things of the page to take dynamic data
                <div className="category">
                    <img className='saree-img'
                        src={this.props.productimage}
                        alt="category Sarees" />
                    <div className="curtains">
                        <p>{this.props.productname}</p>
                        <p>
                            <StarRateIcon/>
                            <StarRateIcon/>
                            <StarRateIcon/>
                            <StarRateIcon/>
                            <StarRateIcon/>
                            {this.props.nooproduct}
                        </p>
                        <p>FROM Rs {this.props.price}</p>
                    </div>
                </div>
        )
    }
}
