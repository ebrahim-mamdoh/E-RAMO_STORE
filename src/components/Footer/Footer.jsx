import React from 'react'


// import images
import image_1 from '../../assets/footer/footer-logo.png'
import image_2 from '../../assets/footer/google.png'
import image_3 from '../../assets/footer/app.png'
import image_4 from '../../assets/footer/payment1.png'
import image_5 from '../../assets/footer/payment2.png'
import image_6 from '../../assets/footer/payment3.png'
import image_7 from '../../assets/footer/payment4.png'

import './Footer.css'
export default function Footer() {
  



  
  return (
    <footer className="footer">
      <div className="container">
     <div className="footer-container">
        <div className="footer-column">
          <h3>STORE INFORMATION</h3>
          <ul>
            <li><i className="fa fa-map-marker"></i> E-RAMO Store, NasrCity-Cairo-Egypt</li>
            <li><i className="fa fa-phone"></i> +201011559674</li>
            <li><i className="fa fa-envelope"></i> Info@E-Ramo.Net</li>
            <li><i className="fa fa-fax"></i> Fax: 123456</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>WHY WE CHOOSE</h3>
          <ul>
            <li>Latest News</li>
            <li>Why E-Ramo</li>
            <li>More Details</li>
            <li>E-Ramo</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>IMPORTANT LINKS</h3>
          <ul>
            <li>Terms And Conditions</li>
            <li>Contact Us</li>
            <li>About Store</li>
          </ul>
        </div>
        <div className="footer-column logo-and-info">
          <div className="logo">
            <img src={image_1} alt="E-RAMO Logo" />
            <p>
              Shop at e-Ramo Store for a wide selection of quality products at great prices, all
              conveniently available online for your shopping pleasure.
            </p>
          </div>
          <div className="app-buttons d-flex">
            <img src={image_2} alt="Google Play" />
            <img src={image_3} alt="App Store" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright 2024 - Designed & Developed with ❤️ by <strong>e-RAMO For Digital Solutions</strong>
        </p>
        <div className="payment-methods">
          <img src={image_4} alt="MasterCard" />
          <img src={image_5} alt="PayPal" />
          <img src={image_6} alt="Discover" />
          <img src={image_7} alt="American Express" />
        </div>
      </div>   
      </div>
      
    </footer>
  );
}
