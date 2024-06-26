import React, {useContext} from 'react';
import "./DisplayProduct.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import {ShopContext} from "../../Context/ShopContext.js";

const DisplayProduct = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  
  return (
    <div className="displayproduct">
      <div className="displayproduct-left">
        <div className="displayproduct-img-list">
          <img src={product.imagetwo} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
        </div>
        <div className="displayproduct-img">
          <img className="displayproduct-main-img" src={product.image} alt=""/>
        </div>
      </div>
      <div className="displayproduct-right">
        <h1>{product.title}</h1>
        <div className="displayproduct-right-star">
          {/* <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_dull_icon} alt=""/>
          <p>(122)</p> */}
        <div className="displayproduct-right-price">
          <p>${product.price}</p> 
        </div>
        <div className="displayproduct-right-stock">
        <p>Available:</p><p>{product.stock}</p>
        </div>
        <div className="displayproduct-right-description">
          {product.description}
        </div>
          {product.stock===0?
          <button className="disabled-button" disabled>OUT OF STOCK</button>
          :<button className="active-button" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          }
        
          
        </div>
      </div>
    </div>
  )
}

export default DisplayProduct;