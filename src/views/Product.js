import React from 'react';
import Descriptions from '../components/product/Descriptions';
import ProductList from '../components/product/ProductList'
import Stories from '../components/product/Stories'

function Product(props) {
    return (
        <div>
            <ProductList />
            <Stories />
            <Descriptions />
        </div>
    );
}

export default Product;