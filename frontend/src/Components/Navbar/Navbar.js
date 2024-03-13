import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
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
        <li onClick={()=>{setMenu("home")}}><Link style={{color: "black"}} to="/">Home</Link>{menu==="home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("miniatures")}}><Link style={{ color: "black"}} to="/miniatures">Miniatures</Link>{menu==="miniatures"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sceneryterrain")}}><Link style={{ color: "black"}} to="/sceneryterrain">Scenery/Terrain</Link>{menu==="sceneryterrain"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}><Link style={{ color: "black"}} to="/books">Books</Link>{menu==="books"?<hr/>:<></>}</li>
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