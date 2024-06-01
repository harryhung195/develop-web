import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>Head to Akaiito in the CBD and Bansho in Armadale for spanner-crab chawanmushi, or to Yakikami in South Yarra for one with green-lip abalone.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
              <ul>
                <li>+6112345345678</li>
                <li>contact@gmail.com</li>
              </ul>
            </div>
            
        </div>
         <hr/>
         <p className="footer-copyright">Developed by Van Hung Hoang Copyright © 2024. All right reserved.</p>
      
    </div>
  )
}

export default Footer
