import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory"
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
        <Route path="/miniatures" element={<ShopCategory category="miniatures"/>}/>
        <Route path="/sceneryterrain" element={<ShopCategory category="sceneryterrain"/>}/>
        <Route path="/books" element={<ShopCategory category="books"/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/loginreg" element={<LoginReg/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
