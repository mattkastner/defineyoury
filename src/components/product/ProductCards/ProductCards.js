import React from 'react';
import ReactPlayer from "react-player"

import './productCards.scss'

function ProductCards(props) {
    return (

        <div className=' product-card col-lg-3 col-md-6 col-sm-12' width="100%">
            <ReactPlayer className='react-player' url={props.videoURL} light={props.thumbnail} width="100%" controls />
            {/* <div>
            </div> */}
            <div className='product-header'>{props.title}</div>
            <div className='product-text'>{props.text}</div>
        </div>

    );
}

export default ProductCards; 