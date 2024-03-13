import React, {useState} from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import logotwo from "../Assets/logotwo.png";
import cart_icon from "../Assets/cart_icon.png";


const Navbar = () => {

  const [menu, setMenu] = useState("miniatures");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div> 
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("miniatures")}}>Miniatures{menu==="miniatures"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("scenery/terrain")}}>Scenery/Terrain{menu==="scenery/terrain"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}>Books{menu==="books"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/>
        <div className="nav-cart-count">0</div>
      </div>
      <div className="nav-logotwo">
        <img src={logotwo} alt="" />
      </div> 
    </div>
  )
}
export default Navbar;