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

                {introduction ? (
                    <IntroVideosDisplay text="hey" />
                ) : business ? (
                    <IntroVideosDisplay text="yo" />
                ) : (
                            <IntroVideosDisplay text="lol" />
                        )}
            </div>
        </section>
    );
}

export default IntroVideos;
