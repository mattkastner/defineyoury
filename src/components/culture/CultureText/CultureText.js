import React from "react";
import { culerData } from "../../../utilities/constants";
import "./cultureText.scss";

export default function CultureText(props) {
  return (
    <div className="section5">
      <div className="section5__container">
        <div className="row align-self-center">
          {culerData.map((data, index) => {
            return (
              <div className="col-md-6 mb-3 mb-md-0" key={index}>
                <div className="action-container">
                  <div className="action">
                    <button
                      className={`brand-customer__btns  ${
                        index === 0 ? "dark" : "yellow"
                      }`}
                    >
                      {data.title}
                    </button>
                    <p className="">{data.dec}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
