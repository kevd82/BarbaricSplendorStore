import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Miniatures from "./Pages/Miniatures";
import SceneryTerrain from "./Pages/SceneryTerrain";
import Books from "./Pages/Books";
import Cart from "./Pages/Cart";
import LoginReg from "./Pages/LoginReg";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/miniatures" element={<Miniatures/>}/>
        <Route path="/sceneryterrain" element={<SceneryTerrain/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/loginreg" element={<LoginReg/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
