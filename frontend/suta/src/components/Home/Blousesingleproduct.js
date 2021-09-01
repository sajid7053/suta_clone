// importing react component
import React, { Component } from 'react'
import './homepage.css'
import StarRateIcon from '@material-ui/icons/StarRate';

// class component for singleproduct
export default class blousesingleproduct extends Component {
    render() {
        return (
            // using props for the repeated things of the page to take dynamic data
                <div className="category">
				<img className='saree-img' src={this.props.productimage} alt="category Sarees"/>
					<p>{this.props.productname}</p>
					{/* <!--rating to saree--> */}
					<p>
						<StarRateIcon/>
						<StarRateIcon/>
						<StarRateIcon/>
						<StarRateIcon/>
						<StarRateIcon/>
						{this.props.nooproduct}
					</p>
					<p>Rs. {this.props.price}</p>
                    <p>Available Sizes:S,M,L,XL,XXL</p>
			</div>
        )
    }
}
