import React from 'react';
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Welcome to Barbaric Splendor!</h1>
            </div>
          <div className="hero-text2">
            <h2>Placeholder text for About info descsribing barbaric splendor</h2>
          </div>
        <div className="hero-image">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero;
