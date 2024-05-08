import React, {useState, useEffect, useContext} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import bslogo from "../Assets/bslogo.png";
import logotwo from "../Assets/logotwo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {

  const [menu, setMenu] = useState("");

  // const [randomImage, setRandomImage] = useState("");

  const {getTotalCartItems} = useContext(ShopContext);
  
  // useEffect(()=>{
  //   const images= [nav_image, nav_image2];

  //   const randomImageIndex =
  //     Math.floor(Math.random()*images.length);
  //   setRandomImage(images[randomImageIndex]);
  //   }, [])
  

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>Barbaric</h2><img src={bslogo} alt="" /><h2>Splendor</h2>
      </div> 
      
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{color: "black", textDecoration: "none"}} to="/">Home</Link>{menu==="home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("miniatures")}}><Link style={{ color: "black", textDecoration: "none"}} to="/miniatures">Miniatures</Link>{menu==="miniatures"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sceneryterrain")}}><Link style={{ color: "black", textDecoration: "none"}} to="/sceneryterrain">Scenery/Terrain</Link>{menu==="sceneryterrain"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}><Link style={{ color: "black",textDecoration: "none"}} to="/books">Books</Link>{menu==="books"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link style={{color: "black", textDecoration: "none"}} to="/contact">Contact</Link>{menu==="contact"?<hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")?
        <button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>
        : <Link to="/loginreg"><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt=""/></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <div className="nav-image-motto">
        <h2>Game</h2><img src={logotwo} alt="" /><h2>Savage</h2>
      </div> 
    </div>
  )
}
export default Navbar;