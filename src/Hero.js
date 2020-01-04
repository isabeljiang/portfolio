import React from 'react';
import './Hero.css';

import Button from "./Button";

function Hero(props) {
    return (
        <div className="hero block">
            <div className="hero-text">
                <h1 className="center-left">{props.text}</h1>
                <Button text="CV"/>
            </div>
        </div>
    )

}

export default Hero;
