import React from 'react'

// style
import "./ProductDisplay.scss"

export default function ProductDisplay(props) {
    return (
        <div className="product-display__container">
            <div className="video-container">Video</div>
            <h5>{props.header}</h5>
            <p>
                {props.text}
            </p>
        </div>
    )
}
