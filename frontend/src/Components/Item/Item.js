import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img src={props.image} alt=""/></Link> 

      <div className="item-prices">
        <div className="item-title">
          <p>{props.title}</p>
        </div>
        <div className="item-price">
          <p>${props.price}</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Item;
