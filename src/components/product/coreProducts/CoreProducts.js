import React from "react";
import ProductCards from '../ProductCards/ProductCards'

import './coreProducts.scss'

function CoreProducts(props) {
    return (
        <section>
            <div className="core-products-body">
                <div className='title-core-products'>
                    <h2> Core Products</h2>
                </div>
                <div className="core-products-container">
                    <div className='product-cards'>
                        <ProductCards
                            title='Activate'
                            videoURL='https://vimeo.com/358894984'
                            text='an approach to health that combines products, simple core principles, and supporting tools to help you embrace a metabolically healthy lifestyle'
                        />
                        <ProductCards
                            title='Balance/Bios Life'
                            videoURL='https://vimeo.com/81767627'
                            text='A unique patented nutritional formula helps you stabilize blood sugar levels, lower cholesterol and lose weight. Over billions in sales!'

                        />
                        <ProductCards
                            title='Cleanse'
                            videoURL='https://vimeo.com/81767624'
                            text='A time-tested formula that cleanses your system of unhealthy toxins and parasites.'

                        />
                        <ProductCards
                            title='Matcha/Bios Life E'
                            videoURL='https://vimeo.com/81767626'
                            text='A rare superfood that speeds up your metabolism, increase energy and improve mental clarity and focus.'
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreProducts;