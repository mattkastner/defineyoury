import React from 'react';
import ReactPlayer from "react-player"

import './productCards.scss'

function ProductCards(props) {
    return (
        <div>
            <div className='product-card'>

                <ReactPlayer url={props.videoURL} width='300' height='240' controls />
                <div>{props.title}</div>
                <div>{props.text}</div>
            </div>
        </div>
    );
}

export default ProductCards;