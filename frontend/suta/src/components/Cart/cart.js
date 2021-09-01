import React, { Component } from 'react'
import './cartpage.css'
export default class cart extends Component {
    constructor() {
        super();
        this.state = {
            productname: null,
            price: null,
            image: null,
            id: null,
            quantity: null
        }
    }
    componentDidMount() {
        var accessTokenObj = JSON.parse(localStorage.getItem("user-info"));
        fetch("http://localhost:5000/category?_id=61002da0634c2b3f244f5621", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessTokenObj.Token}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
        }).then((resp) => {
            resp.json().then((result) => {
                this.setState({
                    productname: result[0].productname,
                    price: result[0].price,
                    image: result[0].image,
                    id: result[0]["_id"]
                })
                console.log(this.state)
                // console.log(this.state.list[0].productname)
            })
        })
    }

    cart() {
        var accessTokenObj = JSON.parse(localStorage.getItem("user-info"));
        fetch("http://localhost:5000/addcart",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessTokenObj.Token}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body:JSON.stringify(this.state.id, this.state.quantity)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result)
            })
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="sc-cc">
                <div className="sc-main-cont">
                    {/* <!--Cart product screen--> */}
                    <h1 className="sc-main-head">CART</h1>
                    <div className="sc-cont1">
                        <h2 className="sc-sub-head1">Product</h2>
                        <h2 className="sc-sub-head2">Quantity</h2>
                        <h2 className="sc-sub-head">Total</h2>
                    </div>
                    <hr />

                    {/* <!--Adding the different multiples products in cart--> */}
                    <div className="sc-cart-1">
                        <div className="sc-cart-2">
                            <img src= {this.state.image}
                                className="sc-img-1" alt="images" />
                            <div className="sc-cart-3">
                                <p>{this.state.productname}<br /> Rs. {this.state.price}</p>
                            </div>
                        </div>

                        <div className="sc-control-1">
                            <div className="sc-br">
                                {/* <!--Increment and decrement of qunatity product--> */}
                                <div className="sc-br1">
                                    <button className="sc-bttn sc-bttn-left" id="minus">
                                        <span>-</span>
                                    </button>
                                    <input type="number" className="sc-input" id="input" onChange={(e)=>{this.setState({quantity:e.target.value})}} />
                                    <button onClick={()=>{this.cart()}} className="sc-bttn sc-bttn-right" id="plus">
                                        <span>+</span>
                                    </button>
                                </div>
                                {/* <!--Remove from the cart--> */}
                                <p className="sc-para1">REMOVE</p>
                            </div>
                        </div>
                        <p className="sc-para2">RS. {this.state.price}</p>

                    </div>
                    <hr />
                    <div className="sc-total">
                        <h2 className="sc-total-1">Add Order Note</h2>
                        <h2 className="sc-total-1">Total: Rs . {this.state.price}</h2>
                    </div>
                    <div className="sc-total">
                        <input type="text" placeholder="How can we help yoy?" className="sc-in-element" />
                        {/* <!--Going to payment screen to pay for that product--> */}
                        <div className="sc-ship">
                            <p>Shipping and Taxes Calculated at Checkout</p>
                            <buttom className="sc-viewbtnel">checkout</buttom>
                        </div>
                    </div>
                </div>
                <hr />

                {/* <!--Recent products view by user--> */}
                <h1 className="sc-recent">RECENTLY VIEWED</h1>
                <div className="sc-cont-re">
                    <div className="sc-cont1-re">
                        <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/envelope-799485_400x.jpg?v=1626423742" className="sc-img-re" alt="images" />
                        <p className="sc-para-re">ENVELOPE</p>
                        <p className="sc-para-re">RS. 820</p>

                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0026/6544/7536/products/ode-to-greens-851359_400x.jpg?v=1610776908" className="sc-img-re" alt="images" />
                        <p className="sc-para-re">ODE TO GREENS (SAREE)</p>
                        <p className="sc-para-re">RS. 1,620</p>

                    </div>
                </div>
            </div>
        )
    }
}
