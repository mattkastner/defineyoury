import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

function Footer(props) {
  return (
    <section className="footer-body">
      <div className="section-container">
        <div className="about-us-container">
          <h1 className="footer-topics">About Us</h1>
          <div className="about-us-text">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed ….
          </div>
        </div>
        <div className="quick-links-container">
          <h1 className="footer-topics">Quick Links</h1>
          <ul className="list-container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3 className="quick-links">Culture</h3>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <h3 className="quick-links">Products</h3>
            </Link>
            <Link to="/business" style={{ textDecoration: "none" }}>
              <h3 className="quick-links">Business</h3>
            </Link>
            <Link to="/training" style={{ textDecoration: "none" }}>
              <h3 className="quick-links">Training</h3>
            </Link>
          </ul>
        </div>
        <h1 className="social-media-container">
          <div className="footer-topics">Social Media</div>
          <div>
            <div className="social-media-links">
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
            </div>
          </div>
        </h1>
      </div>
      <div className="all-rights-reserved-container">
        <div>@2020 All Rights Reserved</div>
      </div>
    </section>
  );
}

export default Footer;
