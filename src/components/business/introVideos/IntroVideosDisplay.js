import React from 'react';
import ReactPlayer from "react-player"
import './introVideosDisplay.scss'

function IntroVideosDisplay(props) {
    return (
        <div className='intro-videos-display-body'>

            <ReactPlayer className='intro-video-player' url={props.url} controls />
            <h1 className='introduction-title-container'>
                <p className='introduction-title'>
                    {props.title}
                </p>
            </h1>
            <p className='introduction-text'>
                {props.text}
            </p>
        </div>
    );
}

export default IntroVideosDisplay;