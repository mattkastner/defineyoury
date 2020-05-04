import React from 'react'

// icons
import { ArrowRight } from 'react-feather';

// styles
import "./GeneralButton.scss"

const handleClick = (link) => {
    return link
}

export default function GeneralButton(props) {
    return (
        <button onClick={() => handleClick(props.link)} className={props.variant === 'yellow' ? "general-button--yellow" : "general-button--black"}>
            {props.text}
            <ArrowRight size={20}/>
        </button>
    )
}
