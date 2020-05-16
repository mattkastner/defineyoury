import React from "react";

// style
import "./ProductDisplay.scss";

export default function ProductDisplay(props) {
  return (
    <div className="product-display__container">
      <div class="video-container">
        <video width="300" height="180" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-container">
        <h5>{props.header}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
