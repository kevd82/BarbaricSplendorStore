import React from 'react'
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Welcome to Barbaric Splendor!</h1>
            <br/>
            <h2>Latest news:</h2>
        </div>
        <div className="hero-image">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero;
