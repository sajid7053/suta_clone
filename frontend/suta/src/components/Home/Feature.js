//Importing the react component module
import React, { Component } from 'react'
import './homepage.css'

//exporting the class component
export default class Feature extends Component {
  render() {
    return (
      <div>
        <section>
          {/* <!--Loving video about the saree--> */}
          <div className="container">
            <img className='display-img' src="https://cdn.shopify.com/s/files/1/0026/6544/7536/files/website_thumbnail_1500x.jpg?v=1568484730" alt="Handloom Sarees" />
            {/* <!-- <h2>DIPPED IN LOVE</h2> --> */}
          </div>
        </section>

        {/* <!--Followers of comapnies--> */}
        <div id="slideshow">
          <h2 style={{ textAlign: 'center' }}>Feature In</h2>
          <div className="containerr-f">
            <section>
              <img src="https://pbs.twimg.com/profile_images/1280410572924743680/EPeRQ6f9_400x400.jpg" className="smm" alt="images" />
            </section>
            <section>
              <img src="https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/cnbc_logo.gif?v=1524171804" className="smm" alt="images" />
            </section>
            <section>
              <img src="https://assets-global.website-files.com/5ae98eec19474ec4b00cd02a/5bee83f7a69edda26bc5b891_YourStory_Logo-New-01.png" className="smm" alt="images" />
            </section>
            <section><img src="https://womengrow.com/wp-content/uploads/2015/02/Grazia.jpg" className="smm" alt="images" /></section>
            <section><img src="https://www.femina.in/images/femina_logo_image.jpg" className="smm" alt="images" /></section>
            <section><img src="https://assets.vogue.in/photos/605312f069b9550dcd36b899/16:9/w_1280,c_limit/meta-site-image.png" className="smm" alt="images" /></section>
          </div>
        </div>

        <section>
          {/* <!--Instargram followers--> */}
          <h4>FOLLOW US ON INSTAGRAM</h4>
          <h1>@SUTA_BOMBAY</h1>
          <div className="container flex">
            <img
              src="https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/219717323_255422916391626_995779154482929191_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AL4bvvV6Kj4AX84_1SQ&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=e1cac123bccd6dfb38549f06e63a7eef&oe=60FBD2EA 640w, https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/219717323_255422916391626_995779154482929191_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AL4bvvV6Kj4AX84_1SQ&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=e1cac123bccd6dfb38549f06e63a7eef&oe=60FBD2EA 1080w" alt="images" />
            <img
              src="https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/219717323_255422916391626_995779154482929191_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AL4bvvV6Kj4AX84_1SQ&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=e1cac123bccd6dfb38549f06e63a7eef&oe=60FBD2EA 640w, https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/219717323_255422916391626_995779154482929191_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AL4bvvV6Kj4AX84_1SQ&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=e1cac123bccd6dfb38549f06e63a7eef&oe=60FBD2EA 1080w" alt="images" />
            <img
              src="https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/219717323_255422916391626_995779154482929191_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AL4bvvV6Kj4AX84_1SQ&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=e1cac123bccd6dfb38549f06e63a7eef&oe=60FBD2EA 640w, https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/219717323_255422916391626_995779154482929191_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=AL4bvvV6Kj4AX84_1SQ&_nc_ht=scontent-lga3-1.cdninstagram.com&edm=AM6HXa8EAAAA&oh=e1cac123bccd6dfb38549f06e63a7eef&oe=60FBD2EA 1080w" alt="images" />
          </div>
        </section>
      </div>

    )
  }
}
