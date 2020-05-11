import React from 'react';
import ReactPlayer from "react-player"

import './businessVideoDisplay.scss'

function BusinessVideosDisplay(props) {
    return (
        <div>
            <div className='story-video'>
                <h1>
                    {props.text}
                </h1>
                <ReactPlayer url={props.url} width='400' height='300' controls
                />

            </div>
        </div>
    );
}

export default BusinessVideosDisplay;