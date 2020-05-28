import React from 'react';
import ReactPlayer from "react-player"

import './productCards.scss'

function ProductCards(props) {
    return (
        <div>
            <div className='product-card'>
                <ReactPlayer className='react-player' url={props.videoURL} light={props.thumbnail} width='300' height='240' controls />
                <div>
                </div>
                <div className='product-header'>{props.title}</div>
                <div className='product-text'>{props.text}</div>
            </div>
        </div>
    );
}

export default ProductCards; 