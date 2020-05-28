import React from "react";
import ProductCards from '../ProductCards/ProductCards'

import './coreProducts.scss'

import activate from '../../../utilities/assets/images/p4.png'
import balance from '../../../utilities/assets/images/p1.png'
import cleanse from '../../../utilities/assets/images/p3.png'
import matcha from '../../../utilities/assets/images/p2.png'

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
                            thumbnail={activate}
                            text='An approach to health that combines products, simple core principles, and supporting tools to help you embrace a metabolically healthy lifestyle'
                        />
                        <ProductCards
                            title='Balance/Bios Life'
                            videoURL='https://vimeo.com/81767627'
                            thumbnail={balance}
                            text='A unique patented nutritional formula helps you stabilize blood sugar levels, lower cholesterol and lose weight. Over billions in sales!'

                        />
                        <ProductCards
                            title='Cleanse'
                            videoURL='https://vimeo.com/81767624'
                            thumbnail={cleanse}
                            text='A time-tested formula that cleanses your system of unhealthy toxins and parasites.'

                        />
                        <ProductCards
                            title='Matcha/Bios Life E'
                            videoURL='https://vimeo.com/81767626'
                            thumbnail={matcha}
                            text='A rare superfood that speeds up your metabolism, increase energy and improve mental clarity and focus.'
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreProducts;