import React from 'react';

import './productGuideDisplay.scss'

function ProductGuideDisplay(props) {
    return (
        <div className='product-guide-display-body row'>

            <img className='guide-picture col-lg-6 col-sm-12 ' src={props.img} />

            <div className='product-guide-text col-lg-6 col-sm-12' >
                {props.viewBSA ?

                    (<>
                        <h1 className='product-guide-topics'>
                            Benefits
                     </h1>
                        <p className='benefit-text'>
                            {props.benefitText}
                        </p>

                        <h1 className='product-guide-topics'>
                            Suggested Use
                      </h1>
                        <p className='benefit-text'>{props.suggestedUseText}</p>
                        <h1 className='product-guide-topics'>
                            Audience
                        </h1>
                        <p className='benefit-text'>
                            {props.audienceText}
                        </p>
                        <div className="btn buyBtn" style={{ marginLeft: '0', maxWidth: '300px', height: '40px' }}>Download Product Guide</div>
                    </>) : (

                        <>
                            <h1 className='product-guide-topics'>
                                Activate
                        </h1>
                            <p className='benefit-text'>
                                {props.activateText}
                            </p>
                            <div className="btn buyBtn" style={{ marginLeft: '0', maxWidth: '300px', height: '40px', width: 'auto' }}>Download Product Guide</div>
                            <div className="btn buyBtn" style={{ marginLeft: '0', maxWidth: '300px', height: '40px', width: 'auto' }}>Product Profile</div>
                            <div className="btn buyBtn" style={{ marginLeft: '0', maxWidth: '300px', height: '40px', width: 'auto' }}>About Insulin</div>
                        </>






                    )}

            </div>


        </div>
    );
}

export default ProductGuideDisplay;