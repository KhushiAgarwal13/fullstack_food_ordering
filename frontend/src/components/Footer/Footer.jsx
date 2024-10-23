import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Discover a delightful culinary experience with our diverse menu featuring mouthwatering dishes made from the finest ingredients. Whether you're craving vegetarian or non-vegetarian options, we’ve got something for everyone! Enjoy hassle-free online ordering and timely delivery right to your doorstep. Join us in celebrating taste, quality, and sustainability—because every meal should be a delicious occasion!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
             <li>Home</li>
             <li>About</li>
             <li>Delivery</li>
             <li>Privacy policy</li>
            </ul>
        </div>


        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>9817958138</li>
    <li>contact@tomato.com</li>
</ul>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
