import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer-body">
      <div className="about-us-container">
        <div className="footer-topics">About Us</div>
        <div className="about-us-text">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed ….
        </div>
      </div>
      <div className="quick-links-container">
        <div className="footer-topics">Quick Links</div>
      </div>
      <div className="social-media-container">
        <div className="footer-topics">Social Media</div>
      </div>
    </div>
  );
}

export default Footer;
