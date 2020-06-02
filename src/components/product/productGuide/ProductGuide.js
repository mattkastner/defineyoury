import React, { useState } from 'react';

import './productGuide.scss'

function ProductGuide(props) {

    const [activate, setActivate] = useState(true)
    const [balance, setBalance] = useState(false)
    const [cleanse, setCleanse] = useState(false)
    const [matcha, setMatcha] = useState(false)



    return (
        <section>

            <div className='product-guide-body'>
                <h1 className='product-guide-title'>
                    More About Unicity Core Products
                </h1>
                <div className='menu-product-guide-container'>
                    <div className='menu-product-container'>
                        <div className='product-menu-options'>
                            <div className='menu-activate'> Activate</div>
                        </div>

                        <div className='product-menu-options'>
                            <div className='menu-balance'>Balance</div>

                        </div>
                        <div className='product-menu-options'>
                            <div className='menu-cleanse'>Cleanse</div>
                        </div>

                        <div className='product-menu-options'>

                            <div className='menu-matcha'>Matcha</div>
                        </div>

                    </div>
                </div>

            </div>
        </section >
    );
}

export default ProductGuide;
