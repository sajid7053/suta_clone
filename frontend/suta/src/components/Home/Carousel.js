//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'

//exporting the class component
export default class carousel extends Component {
  // constructor() {
  //     super();
  //     this.state = {
  //         imageIsReady: false,
  //         url: ""
  //     }
  // }


  render() {
    return (
      <div>
        <section>
          {/* <!--slider images section--> */}
          <div className="container">
            <ul className="slider">
              <li>
                <div className="banner-text">
                  <h3>WOKE UP LIKE THIS</h3>
                  <div className="banner-buttons">
                    <div className="banner-btn1">
                      <h4>LOUNGE WEAR</h4>
                    </div>
                    <div className="banner-btn2">
                      <h4>ACCESSORIES</h4>
                    </div>

                  </div>
                </div>
                {/* <!--banner images--> */}
                <input type="radio" id="sl" name="slide" defaultChecked />
                <input type="radio" id="slide1" name="slide" />
                <label htmlFor="slide1">
                </label>
                <img src={"/images/web_banner.jpg"} />
              </li>
              <li>
                <input type="radio" id="slide2" name="slide" />
                <label htmlFor="slide2"></label>
                <img src="/images/web_banner1.jpg" />
              </li>
              <li>
                <input type="radio" id="slide3" name="slide" />
                <label htmlFor="slide3"></label>
                <img src="/images/web_banner2.jpg" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
