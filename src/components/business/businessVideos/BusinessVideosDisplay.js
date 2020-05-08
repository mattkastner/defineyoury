import React from 'react';

import './businessVideoDisplay.scss'

function BusinessVideosDisplay(props) {
    return (
        <div>
            <div className='story-video'>
                <h1>
                    {props.text}
                </h1>
                <video src={props.src} width='320' height='240' controls
                >
                </video>

            </div>
        </div>
    );
}

export default BusinessVideosDisplay;