import React, {useState, useEffect} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../Assets/logo.png";
import nav_image from "../Assets/nav_image.png";
import nav_image2 from "../Assets/nav_image2.png";
import nav_image3 from "../Assets/nav_image3.png";
import nav_image4 from "../Assets/nav_image4.png";
import nav_image5 from "../Assets/nav_image5.png";
import cart_icon from "../Assets/cart_icon.png";



const Navbar = () => {

  const [menu, setMenu] = useState("");

  const [randomImage, setRandomImage] = useState("");
  
  useEffect(()=>{
    const images= [nav_image, nav_image2, nav_image3, nav_image4, nav_image5];

    const randomImageIndex =
      Math.floor(Math.random()*images.length);
    setRandomImage(images[randomImageIndex]);
    }, [])
  

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div> 
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{color: "black", textDecoration: "none"}} to="/">Home</Link>{menu==="home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("miniatures")}}><Link style={{ color: "black", textDecoration: "none"}} to="/miniatures">Miniatures</Link>{menu==="miniatures"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sceneryterrain")}}><Link style={{ color: "black", textDecoration: "none"}} to="/sceneryterrain">Scenery/Terrain</Link>{menu==="sceneryterrain"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}><Link style={{ color: "black",textDecoration: "none"}} to="/books">Books</Link>{menu==="books"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/loginreg"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt=""/></Link> 
        <div className="nav-cart-count">0</div>
      </div>
      <div className="nav-image">
        <img src={randomImage} alt="" />
      </div> 
    </div>
  )
}
export default Navbar;