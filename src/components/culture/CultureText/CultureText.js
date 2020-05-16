import React from "react";

import "./cultureText.scss";

export default function CultureText(props) {
  return (
    <div className="section5">
      <div className="action-container">
        <div className="action">
          <button className="brand-customer__btns dark">Brand Affiliate</button>
          <p className="">
            Start Your own business by sharing our products with others done
          </p>
       </div>
      </div>
      <div className="action-container">
        <div className="action">
          <button className="brand-customer__btns yellow">Customer</button>
          <p className="">
            Shop from over 1,00 incredible products and enjoy exclusive perks
          </p>
        </div>
      </div>
    </div>
  );
}
