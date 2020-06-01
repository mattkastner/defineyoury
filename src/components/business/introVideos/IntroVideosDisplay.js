import React from 'react';
import ReactPlayer from "react-player"
import './introVideosDisplay.scss'

function IntroVideosDisplay(props) {
    return (
        <div className='intro-videos-display-body'>

            <ReactPlayer className='intro-video-player' url={props.url} controls />
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default IntroVideosDisplay;