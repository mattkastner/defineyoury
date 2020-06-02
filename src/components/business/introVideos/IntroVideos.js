import React, { useState } from "react";
import IntroVideosDisplay from "./IntroVideosDisplay";
import "./introVideos.scss";

function IntroVideos(props) {
    const [introduction, setIntroduction] = useState(true);
    const [business, setBusiness] = useState(false);
    const [products, setProducts] = useState(false);

    const setIntroductionTrue = () => {
        setIntroduction(true);
        setBusiness(false);
        setProducts(false);
    };

    const setBusinessTrue = () => {
        setBusiness(true);
        setIntroduction(false);
        setProducts(false);
    };

    const setProductsTrue = () => {
        setProducts(true);
        setIntroduction(false);
        setBusiness(false);
    };

    return (
        <section>
            <div className="intro-video-body">
                <div className="intro-menu-container">
                    <div className="intro-menu-items">
                        <p className="menu-introduction" onClick={setIntroductionTrue}>
                            Introduction
						</p>
                    </div>
                    <div className="intro-menu-items">
                        <p className="menu-business" onClick={setBusinessTrue}>
                            The Business
						</p>
                    </div>
                    <div className="intro-menu-items">
                        <p className="menu-products" onClick={setProductsTrue}>
                            The Products
						</p>
                    </div>
                </div>
                <div className='introduction-videos'>

                    {introduction ? (
                        <IntroVideosDisplay
                            url='https://vimeo.com/108748728'
                            title='Introduction'
                            text='Join the millions of people leaving corporate America to pursue their life’s desires on their terms.'
                        />
                    ) : business ? (
                        <IntroVideosDisplay url='https://vimeo.com/111139806'
                            title='The Business'
                            text='Unicity International, a global company operating in more than 30 countries, is seeking motivated people who want to be independent and operate their own businesses.'
                        />
                    ) : (
                                <IntroVideosDisplay url='https://vimeo.com/108689210'
                                    title='The Products'
                                    text='Three unique and proven nutritional formulations that work together synergistically to help you reduce weight, stabilize blood sugar levels, optimize cholesterol levels and improve bodily functions.'
                                />
                            )}
                </div>
            </div>
        </section>
    );
}

export default IntroVideos;
