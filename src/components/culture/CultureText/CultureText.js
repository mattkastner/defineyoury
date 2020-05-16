import React, { Component } from "react";
import "./cultureText.scss";

function CultureText() {
  return (
    <div className="section5 bg-dark container-fluid ">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 paddingLeft ">
          <div className="bg-light paddingLeft text-center rounded">
            <div className="pt-3 text-center">
              <button className="btn b6d text-light">Brand Afilaiate</button>
            </div>
            <p className="pt-4 p6  ">
              Start Your own business by sharing our products with others done
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6  paddingRight ">
          <div className="bg-light paddingLeft text-center rounded">
            <div className="pt-3 ">
              <button className="btn b6y text-light">Brand Afilaiate</button>
            </div>
            <p className="pt-4 p6 ">
              Start Your own business by sharing our products with others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CultureText;
