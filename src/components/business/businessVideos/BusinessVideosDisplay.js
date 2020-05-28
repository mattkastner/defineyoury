import React from 'react';
import ReactPlayer from "react-player"

import './businessVideoDisplay.scss'

function BusinessVideosDisplay(props) {
    return (
        <div>
            <div className='story-video'>
                <h1>
                    {props.name}
                </h1>
                <h2>{props.title}</h2>

                <ReactPlayer url={props.url} width='300' height='240' controls
                />

            </div>
        </div>
    );
}

export default BusinessVideosDisplay;