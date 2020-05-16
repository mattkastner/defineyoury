import React, { Component } from "react";

import "../culture.scss";

// images
import posterImg from "../../../utilities/assets/images/thumbnail.png";
import button from "../../../utilities/assets/images/button.png";

class CultureDescriptions extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="leftDiv">
            <div className="content2 text-light pt-5 pl-5 pr-5 pb-0">
              <h1 className="science-header pb-5 pl-5">
                <p className="d-block firstHalf ">Scientifically</p>{" "}
                <p className="secondHalf"> Proven Products</p>
              </h1>
              <p className="text pl-5">
                This is your mission. To EMPOWER yourself and work toward the
                prime of your life. Those who understand their heritage and are
                committed to the philosophy of improving their health are one
                stepping stone closer to even grander ambitions.
              </p>
              <p className="text pl-5">
                <span className="hidden">text</span> Find the freedom you need
                to truly Make Life Better. Then, as you reach your prime, begin
                helping others work toward their own goals!
              </p>
            </div>
          </div>
          <div className="rightDiv">
            <div>
              <h1 className="headingSpacing">
                <span className="firstHead">We Know You Want To </span>
                <span className="d-block secondHead">Live A Prime Life</span>
              </h1>
              <div className="images">
                <img src={button} className="btnimg" alt="" />
                <img src={posterImg} alt="" width="100%" />
              </div>
              <div className="content3 p-3 pb-5">
                <p className="pt-4 p1">
                  <span className="hidden">text</span>
                  Each of Unicity’s products are subject to meticulous research
                  and development, and several are listed in the prestigious
                  Physicians’ Desk Reference—a resource used often by doctors to
                  learn about prescription drugs and clinically proven
                  alternatives.
                </p>
                <p className="p1 pb-5">
                  <span className="hidden">text</span>
                  Unicity’s products provide a range of benefits—from weight
                  loss and heart health to bone strength and vision support—and
                  can be recommended with confidence to anyone. Hundreds of
                  doctors, surgeons, and healthcare professionals recommend
                  Unicity products to patients every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CultureDescriptions;
