import React, { useEffect, useState } from 'react';
import "./Hero.css";


const Hero = () => {

const [allProducts, setAllProducts] = useState([]);
const [randomProduct, setRandomProduct] = useState({});

useEffect(()=>{
  fetch("http://localhost:4000/allproducts")
  .then((res)=>res.json())
  .then((data)=>setAllProducts(data))
},[])

useEffect(()=>{
const randomProductIndex = 
  Math.floor(Math.random()*allProducts.length);
setRandomProduct(allProducts[randomProductIndex]);
}, [allProducts])

  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Welcome to Barbaric Splendor!</h1>
            <h2>Miniatures and more for your barbarian gaming.</h2>
          </div>
        <div className="hero-featured">
          
        </div>
    </div>
  )
}

export default Hero;
