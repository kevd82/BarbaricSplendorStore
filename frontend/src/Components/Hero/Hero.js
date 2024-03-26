import React from 'react';
import "./Hero.css";
import News from "../News/News.js";


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Welcome to Barbaric Splendor!</h1>
            <h2>Miniatures and more for your barbarian/sword and sorcery gaming.</h2>
          </div>
        <div className="hero-news">
          <News/>
        </div>
    </div>
  )
}

export default Hero;
