import React from 'react';
import "./DisplayProduct.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const DisplayProduct = (props) => {
  const {product} = props;
  
  return (
    <div className="displayproduct">
      <div className="displayproduct-left">
        <div className="displayproduct-img-list">
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
        </div>
        <div className="displayproduct-img">
          <img className="displayproduct-main-img" src={product.image} alt=""/>
        </div>
      </div>
      <div className="displayproduct-right">
        <h1>{product.name}</h1>
        <div className="displayproduct-right-star">
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_dull_icon} alt=""/>
          <p>(122)</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayProduct;