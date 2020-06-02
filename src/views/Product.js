import React from "react";
import ProductDisplay from "../components/product/ProductDisplay";
import CoreProducts from "../components/product/coreProducts/CoreProducts";
import ProductGuide from '../components/product/productGuide/ProductGuide'


function Product(props) {
  return (
    <div>
      <CoreProducts />
      <ProductGuide />
      <ProductDisplay />
    </div>
  );
}

export default Product;
