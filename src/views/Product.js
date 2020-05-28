import React from "react";
import ProductDisplay from "../components/product/ProductDisplay";
import CoreProducts from "../components/product/coreProducts/CoreProducts";


function Product(props) {
  return (
    <div>
      <CoreProducts />
      <ProductDisplay />
    </div>
  );
}

export default Product;
