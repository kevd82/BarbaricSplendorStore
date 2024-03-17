import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Let blaze the signal fires; let blare the signal horns!</h1>
        <h2>Receive the Barbaric Splendor newsletter!</h2>
        <div>
            <input type="email" placeholder="Enter your email."/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;
