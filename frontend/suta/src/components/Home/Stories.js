//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'

//exporting the class component
export default class Stories extends Component {
  render() {
    return (
      <div>
        <section id="Stories-section">
          {/* <!--Stories of motivation about the day--> */}
          <h4>THE BEST STORIES</h4>
          <h1>FROM THE BLOG</h1>
          <div className="container flex">
            <div className="category">
              <img className='saree-img' src="https://cdn.shopify.com/s/files/1/0026/6544/7536/articles/rana-plaza-a-wake-up-call-227627_600x.jpg?v=1619227019" alt="category Sarees" />
              <h3>RANA PLAZA- A <br />WAKE UP CALL</h3>
              <p>Every morning we wake up…to a new day, a <br />new hope, a new blessing…wishing it to be a <br />beautiful one. We get up, get ready, go to <br />work, come back hom...</p>
              <p>Read more</p>
            </div>
            <div className="category">
              <img className='saree-img' src="https://cdn.shopify.com/s/files/1/0026/6544/7536/articles/to-amrit-with-love-3-149753_600x.jpg?v=1617756166" alt="category Sarees" />
              <h3>TO AMRIT WITH <br />LOVE Lessthan 3</h3>
              <p>One sunny afternoon in 2020, when the <br />pandemic had just started taking over our <br />lives and lifestyles, we got an e-mail, a long<br />one. Even before we ...</p>
              <p>Read more</p>
            </div>
            <div className="category">
              <img className='saree-img' src="https://cdn.shopify.com/s/files/1/0026/6544/7536/articles/the-role-that-a-supportive-partner-can-play-772793_600x.jpg?v=1608549957" alt="category Sarees" />
              <h3>THE ROLE THAT A <br />SUPPORTIVE<br />PARTNER CAN PLAY</h3>
              <p>Finding the right co-founder for your start-up is <br />probably the core of how your enterprise will<br />shape up. For me, the fact that my co-<br />founder is my...</p>
              <p>Read more</p>
            </div>
          </div>
          <button className="btn" type="submit">VIEW ALL ARTICLE</button>
        </section>
      </div>
    )
  }
}
