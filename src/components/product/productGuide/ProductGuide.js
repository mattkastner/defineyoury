import React, { useState } from "react";

import "./productGuide.scss";
import ProductGuideDisplay from "./ProductGuideDisplay";

import activatePic from "../../../utilities/assets/images/p4.png";
import balancePic from "../../../utilities/assets/images/p1.png";
import cleansePic from "../../../utilities/assets/images/p3.png";
import matchaPic from "../../../utilities/assets/images/p2.png";

function ProductGuide(props) {
    const [activate, setActivate] = useState(true);
    const [balance, setBalance] = useState(false);
    const [cleanse, setCleanse] = useState(false);
    const [matcha, setMatcha] = useState(false);

    const setActivateTrue = () => {
        setActivate(true);
        setBalance(false);
        setCleanse(false);
        setMatcha(false);
    };

    const setBalanceTrue = () => {
        setBalance(true);
        setActivate(false);
        setCleanse(false);
        setMatcha(false);
    };

    const setCleanseTrue = () => {
        setCleanse(true);
        setActivate(false);
        setBalance(false);
        setMatcha(false);
    };

    const setMatchaTrue = () => {
        setMatcha(true);
        setActivate(false);
        setBalance(false);
        setCleanse(false);
    };

    return (
        <section>
            <div className="product-guide-body">
                <h1 className="product-guide-title">
                    More About Unicity Core Products
				</h1>
                <div className="menu-product-guide-container">
                    <div className="menu-product-container">
                        <div className="product-menu-options">
                            <div className="menu-activate" onClick={setActivateTrue}>
                                {" "}
								Activate
							</div>
                        </div>

                        <div className="product-menu-options">
                            <div className="menu-balance" onClick={setBalanceTrue}>
                                Balance
							</div>
                        </div>
                        <div className="product-menu-options">
                            <div className="menu-cleanse" onClick={setCleanseTrue}>
                                Cleanse
							</div>
                        </div>

                        <div className="product-menu-options">
                            <div className="menu-matcha" onClick={setMatchaTrue}>
                                Matcha
							</div>
                        </div>
                    </div>
                    <div className='product-guide-container'>

                        {activate ? (
                            <ProductGuideDisplay img={activatePic}

                            />
                        ) : balance ? (
                            <ProductGuideDisplay img={balancePic}
                                benefitText="Slows digestion to reduce hunger and prevent spiking blood sugar levels* Supports healthy cholesterol levels with dietary fiber* Helps the body turn more glucose into energy instead of fat*"
                                suggestedUseText='Simply mix one sachet of Balance with 8 oz. of water and drink it 10-15 minutes prior to your meal. Balance should be taken before a meal twice a day. '
                                audienceText='Because different lives require different balances, Balance comes in two formulas: Balance’s Bios Life Cholesterol Balance’s Bios Life Glucose Primary Target: Individuals who want to take control of and manage their health.'
                            />
                        ) : cleanse ? (
                            <ProductGuideDisplay img={cleansePic}
                                benefitText='Cleanse acts like a gentle brush to cleanse the digestive system. Aloe Vera helps cleanse the colon and intestine with laxative properties.'
                                suggestedUseText='Take one capsule with a large glass of water once daily. Unicity Cleanse is a month-long regimen.'
                                audienceText='Primary Target: Individuals wanting to give their digestive system the same attention and care they give other parts of their lives. Secondary Target: People who want their insides to feel extra clean.'
                            />
                        ) : (
                                        <ProductGuideDisplay
                                            img={matchaPic}
                                            benefitText='Energizes body and mind. Increases metabolism. Sharpens concentration. Replenishes electrolytes.'
                                            suggestedUseText='Mix contents of 1 Matcha packet into 8-10 oz. of water. For cold refreshment, try serving Matcha with ice. Please note: More than the recommended use should not be taken.'
                                            audienceText='Primary Target: Go-getters and get-it-doners who need a boost to be their best. Secondary Target: Anyone who prefers a natural energizer before a work-out.'
                                        />
                                    )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductGuide;
