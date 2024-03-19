import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p><span>Showing 1-12</span> out of 36 products</p>
      </div>
        <div className="shopcaegory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>

    </div>
  )
}

export default ShopCategory