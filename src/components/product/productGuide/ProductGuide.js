import React, { useState } from 'react';

import './productGuide.scss'
import ProductGuideDisplay from './ProductGuideDisplay';

function ProductGuide(props) {

    const [activate, setActivate] = useState(true)
    const [balance, setBalance] = useState(false)
    const [cleanse, setCleanse] = useState(false)
    const [matcha, setMatcha] = useState(false)


    const setActivateTrue = () => {
        setActivate(true)
        setBalance(false)
        setCleanse(false)
        setMatcha(false)
    }

    const setBalanceTrue = () => {
        setBalance(true)
        setActivate(false)
        setCleanse(false)
        setMatcha(false)
    }

    const setCleanseTrue = () => {
        setCleanse(true)
        setActivate(false)
        setBalance(false)
        setMatcha(false)
    }

    const setMatchaTrue = () => {
        setMatcha(true)
        setActivate(false)
        setBalance(false)
        setCleanse(false)
    }


    return (
        <section>

            <div className='product-guide-body'>
                <h1 className='product-guide-title'>
                    More About Unicity Core Products
                </h1>
                <div className='menu-product-guide-container'>
                    <div className='menu-product-container'>
                        <div className='product-menu-options'>
                            <div className='menu-activate' onClick={setActivateTrue}> Activate</div>
                        </div>

                        <div className='product-menu-options'>
                            <div className='menu-balance' onClick={setBalanceTrue}>Balance</div>

                        </div>
                        <div className='product-menu-options'>
                            <div className='menu-cleanse' onClick={setCleanseTrue}>Cleanse</div>
                        </div>

                        <div className='product-menu-options'>

                            <div className='menu-matcha' onClick={setMatchaTrue} >Matcha</div>
                        </div>

                    </div>
                    {activate ? (
                        <ProductGuideDisplay
                            text="activate"
                        />
                    ) : balance ? (
                        <ProductGuideDisplay
                            text='balance'
                        />
                    ) : cleanse ? (
                        <ProductGuideDisplay
                            text='cleanse'
                        />
                    ) : (
                                    <ProductGuideDisplay
                                        text='matcha'
                                    />
                                )
                    }
                </div>

            </div>
        </section >
    );
}

export default ProductGuide;
