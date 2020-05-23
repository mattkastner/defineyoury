import React, { Component } from "react";

import p1 from "../../utilities/assets/images/p1.png";
import p2 from "../../utilities/assets/images/p2.png";
import p3 from "../../utilities/assets/images/p3.png";
import p4 from "../../utilities/assets/images/p4.png";
import sp1 from "../../utilities/assets/images/sp1.png";
import Card from "../utils/PCard";

import "./product.scss"

class ProductDisplay extends Component {
  render() {
    const images = [p1,p2,p3,p4];
    return (
      <div className="product__wrap">
        <div className="product__banner">
          <div className="product__container">
            <div className="row">
              <div className="col-lg-5 first mb-4 mb-lg-0">
                <div className="product-col">
                  <img src={sp1} alt="" className="productImg" height="500vh" width="100%" />
                </div>
              </div>
              <div className="col-lg-5 pl-3 pl-xl-5">
                <div className="content11">
                  <h1 className="pheading">Unicity Balance/Bios Life</h1>
                  <p className="ptext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                    rem recusandae voluptatibus? Quod vel dolor, delectus laborum
                    nesciunt similique iure porro illum natus minima in, pariatur
                    cum minus, dolores soluta!
                  </p>
                  <h3 className="availabel__heading">Available Options</h3>
                  <div className="buttons row no-gutters">
                    <button className="col-sm-3 col-md-3 col-lg-3 btn btn-outline-secondary m-1 pbutton">
                      Option 1
                    </button>
                    <button className="col-sm-3 col-md-3 col-lg-3 btn btn-outline-secondary m-1 pbutton">
                      Option 2
                    </button>
                    <button className=" col-sm-3 col-md-3 col-lg-3 btn btn-outline-secondary m-1 pbutton">
                      Option 3
                    </button>
                  </div>
                  <div className="buy">
                    <button className="btn  p-3 buyBtn">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="related__section">
          <div className="product__container">
            <h1>Related Items</h1>
            <div className="row">
                {images.map(el=> <Card img={el}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDisplay;
