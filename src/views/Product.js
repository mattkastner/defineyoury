import React from "react";
import { Fade } from "react-reveal";
import ProductDisplay from "../components/product/ProductDisplay";
import CoreProducts from "../components/product/coreProducts/CoreProducts";
import ProductGuide from "../components/product/productGuide/ProductGuide";

function Product(props) {
  return (
    <div>
      <Fade>
        <CoreProducts />
        <ProductGuide />
      </Fade>
      <ProductDisplay />
    </div>
  );
}

export default Product;
