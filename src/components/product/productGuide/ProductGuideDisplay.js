import React from 'react';

import './productGuideDisplay.scss'

function ProductGuideDisplay(props) {
    return (
        <div className='product-guide-display-body'>

            <img className='guide-picture' src={props.img} />
            <div className='product-guide-text'>
                <h1 className='product-guide-topics'>
                    Benefits
                </h1>
                <p className='benefit-text'>
                    {props.benefitText}
                </p>

                <h2 className='product-guide-topics'>
                    Suggested Use
            </h2>
                <p className='suggested-use-text'>{props.suggestedUseText}</p>
                <h3 className='product-guide-topics'>
                    Audience
            </h3>
                <p className='audience-text'>
                    {props.audienceText}
                </p>

            </div>


        </div>
    );
}

export default ProductGuideDisplay;