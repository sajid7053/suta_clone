//Importing the react module compnent
import React, { Component } from 'react'
import './productdetailspage.css'
//importing the material icons
import StarRateIcon from '@material-ui/icons/StarRate';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Singleproductdetails from './singleproductdetails';
import {Link} from 'react-router-dom'

// dynamic json data to use in map function
// const proddetail = [
//   {
//     unquieid: 1,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-409495_160x.jpg?v=1617364582',
//   },
//   {
//     unquieid: 2,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-672109_160x.jpg?v=1617364582',
//   },
//   {
//     unquieid: 3,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-672109_160x.jpg?v=1617364582',
//   },
//   {
//     unquieid: 4,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-811948_160x.jpg?v=1617364582',
//   },
//   {
//     unquieid: 5,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-584016_160x.jpg?v=1610778328',
//   },
// ]
// const prevdet = [
//   {
//     unquieid: 1,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-409495_160x.jpg?v=1617364582',
//   },
//   {
//     unquieid: 2,
//     imgurl: 'https://cdn.shopify.com/s/files/1/0026/6544/7536/products/raw-ink-mul-409495_160x.jpg?v=1617364582',
//   }
// ]
const socialmedia = [
  {
    unquieid: 1,
    imgurl: 'https://www.facebook.com/sutabombay/',
  },
  {
    unquieid: 2,
    imgurl: 'https://twitter.com/suta_bombay?lang=en',
  },
  {
    unquieid: 3,
    imgurl: 'https://www.instagram.com/suta_bombay/',
  }
]

//exporting the class component
export default class productdetails extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
      list1: null
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
        this.setState({ list: result })
        console.log(this.state.list[0]["_id"])
        // console.log(this.state.list[0].productname)
      })
    })
  // }
  // componentDidMount() {
  // var accessTokenObj = JSON.parse(localStorage.getItem("user-info"));
  fetch("http://localhost:5000/allimage", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessTokenObj.Token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
  }).then((resp) => {
    resp.json().then((result) => {
      this.setState({ list1: result })
      console.log(this.state.list1)
      // console.log(this.state.list[0].productname)
    })
  })
  }

 

  render() {
    return (
      <div>
        <div className="detail-prod">
          {/*Image and information arranged in a row */}
          <div className="row-side">
            <div className="col-side">
              <div className="slider-image">
                {/* <!--Different styles of images--> */}
                {this.state.list1 ?
                <div className="product">
                  {/*Mapping the function to get jsondata */}
                  {this.state.list1.map(item => (<a href="#" ><img src={item.image} alt="dress image" onclick="clickme(this)"/></a>))}
                </div>
                :<p>Please wait</p>}
                
                {this.state.list ?
                <div className="preview">
                  {/* <!--Previewing of selecting the image--> */}
                  {this.state.list.map(item => (<a href="#" ><img src={item.image} alt="dress image" /></a>))}
                </div>
                :<p>Please wait</p>}
              </div>
            </div>
                  
            <div className="col-one">
              {/* <!--To Know more information details of sarees--> */}
              {this.state.list ?
           <div>
              {/* <!--To Know more information details of sarees--> */}
                {this.state.list.map(item => <Singleproductdetails productname={item.productname} quantity={item.quantity} price={item.price}/>)}
                </div>
                :<p>Please wait</p>}

              <div className="control">
                {/* <!--Qunatity of selecting the products--> */}
                <button className="bttn bttn-left" id="minus">
                  <span>-</span>
                </button>
                <input type="number" className="input" id="input" />
                <button className="bttn bttn-right" id="plus">
                  <span>+</span>
                </button>
              </div>

              <div className="data">
                {/* <!--Information of selected product--> */}
                <h3 id="buy"><span>Buy it with</span></h3>
                <div className="check-con">
                  <input type="checkbox" className="checkbox" />
                  <label id="check-heading">Sari Fall And Edging (Rs. 250)</label><br />
                </div>
                <p className="para">(COD is not available for Fall and Edging orders. Any saree ordered with fall and edging can’t be returned or exchanged.)</p>

                <div className="check-con">
                  <input type="checkbox" className="checkbox" />
                  <label id="check-heading">Sari Fall And Edging </label>
                  {/* <!--Selecting the size of product--> */}
                  <p><select className="select-box">

                    <option value="select size">Any/Choose Colour</option>
                    <option value="small">38/OliveGreen</option>
                    <option value="medium">38/Black</option>
                    <option value="large">38/Rust</option>
                    <option value="small">40/OliveGreen</option>
                    <option value="medium">40/Black</option>
                    <option value="large">40/Rust</option>

                  </select></p>
                </div>
                <p className="para">(Click here for size chart. Suta Ninja will select the best color for you. )</p>
                 
                 <Link to={"/cart/"+ "61002da0634c2b3f244f5621"}><button className="btn" type="submit">ADD TO CART</button></Link> 
                  
                <button className="btn" type="submit">BUY IT NOW</button>
                <FavoriteBorderIcon />

                <div className="countries">
                  <p className="origin">Country of Origin: <span style={{ color: "#5c5c5c;" }}>India</span></p>
                  <hr />
                  <p className="para1">Collections: <span style={{ color: '#5c5c5c;,font-size: 2px;' }}>ALL, All Products, All Sarees,
                    Best Seller, Best Seller - Sarees, BEST SELLER Sarees New, Featured Sarees, Made In Heaven Mul, Sarees
                    Under Rs 2100</span></p>
                  <hr />

                  <div className="table">
                    <table>
                      <tr>
                        <td>Story</td>
                        <td>Details</td>
                        <td>Description</td>
                      </tr>
                    </table>
                    <textarea className="text" rows="13" cols="100">The ink flowed slowly and quietly through the pen and reached the tip. She placed it on the paper and the ink started to spread with the slow confidence of drifting continents. She seemed to write carefully, for her wrist twirled with the grace of a dancer. There was no sign of recklessness because she knew that the effect of every word in the written form was irreversible. But, what she wrote was far from carefully curated words. She wrote her mind without inhibitions. The calmness of the pen and the raw, uninhibited words came together like gracefully slithering lava. This raw ink represented her very being.The raw ink made-in-heaven mul saree is one of the most loved drapes at Suta. This one will make you wonder if you really are in saree-heaven!</textarea>
                  </div>

                  {/* <!--Sharing the product into social media--> */}
                  <div className="share">
                    <p className="sahe">SHARE</p>
                    {socialmedia.map(item => (<a href="#" target="_blank" data-id={item.unquieid}><img src={item.imgurl} alt="dress image" /></a>))}
                  </div>
                  <hr />
                  <p className="more">MORE INFORMATION<ChevronRightIcon /></p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}