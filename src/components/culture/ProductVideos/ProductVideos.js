import React from "react";

// components
import ProductDisplay from "./ProductDisplay";

// style
import "./ProductVideos.scss";

function ProductVideos(props) {
  return (
    <section className="product-videos__container">
      <div className="top-text">
        <div className="light-gray--cover"></div>
        <h3>We are all in this together</h3>
        <p>
          After cleansing and balancing, your body now has the foundation it
          needs to build toward prime health. You’ve set the stage to take a
          targeted approach to your body Research and innovation are here to
          empower you with information, products, and services. Take
          responsibility for your health and quality of life! With over 400
          products in over 50 countries!
        </p>
      </div>
      <div className="product-videos">
        <ProductDisplay
          text="A unique approach to health that combines products, simple core principles, and supporting tools to help you embrace a metabolically healthy lifestyle."
          header="Activate"
        />
        <ProductDisplay
          text="A unique and patented nutritional formula helps you stabilize blood sugar levels, lower cholesterol and lose weight.  BILLIONS in sales!"
          header="Balance/Bios Life"
        />
        <ProductDisplay
          text="A time-tested formula that cleanses your system of unhealthy toxins and parasites."
          header="Cleanse"
        />
        <ProductDisplay
          text="A rare superfood that speeds up your metabolism, increase energy and improve mental clarity and focus."
          header="Matcha/Bios Life E"
        />
      </div>
    </section>
  );
}

export default ProductVideos;
