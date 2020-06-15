import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

function Footer(props) {
  return (
    // <section className="footer-body">
    //   <div className="section-container row">
    //     <div className="about-us-container col-md-4">
    //       <h1 className="footer-topics">About Us</h1>
    //       <div className="about-us-text">
    //         Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
    //         in laying out print, graphic or web designs. The passage is
    //         attributed ….
    //       </div>
    //     </div>
    //     <div className="quick-links-container  col-md-4">
    //       <h1 className="footer-topics">Quick Links</h1>
    //       <ul className="list-container">
    //         <Link to="/" style={{ textDecoration: "none" }}>
    //           <h3 className="quick-links">Culture</h3>
    //         </Link>
    //         <Link to="/products" style={{ textDecoration: "none" }}>
    //           <h3 className="quick-links">Products</h3>
    //         </Link>
    //         <Link to="/business" style={{ textDecoration: "none" }}>
    //           <h3 className="quick-links">Business</h3>
    //         </Link>
    //         <Link to="/training" style={{ textDecoration: "none" }}>
    //           <h3 className="quick-links">Training</h3>
    //         </Link>
    //       </ul>
    //     </div>
    //     <div className="social-media-container  col-md-4">
    //       <h1 className="footer-topics">Social Media</h1>
    //       <div>
    //         <div className="social-media-links">
    //           <i className="fa fa-facebook-f"></i>
    //           <i className="fa fa-twitter"></i>
    //           <i className="fa fa-instagram"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="all-rights-reserved-container">
    //     <div>@2020 All Rights Reserved</div>
    //   </div> text-md-left
    // </section>


    <div className=" footer-body text-md-left text-lg-center  ">
      <div className="row section-container">

        <div className="col-md-3 col-sm-6 mt-4">
          <h1 className="footer-topics">About Us</h1>
          <div className="about-us-text">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
              in laying out print, graphic or web designs. The passage is
            attributed ….</p>
          </div>


        </div>

        <div className="col-md-3 mt-4 col-sm-6">
          <h1 className="footer-topics">Quick Links</h1>
          <div className="list-container">
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
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-4">
          <h1 className="footer-topics">Address</h1>
          <div className="about-us-text">
            87e Gerald Lane, NewYork,10013
         </div>
          <div className="about-us-text">
            646-270-7958
         </div>
          <div className="about-us-text">
            test@test.com
         </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 mt-4 sc">
          <h1 className="footer-topics ">Social Media</h1>
          <div >
            <i className="fa fa-facebook-f"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>

      </div>

      <div className="all-rights-reserved-container ">

        <p>@2020 All Rights Reserved</p>
      </div>
    </div>


  );
}

export default Footer;
