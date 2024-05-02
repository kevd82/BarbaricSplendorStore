import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((item, index)=>{
            if (props.category===item.category) {
              return <Item key={index} id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} />
            }
            else{
              return null;
            }
          })}
      </div>
      <div className="shopcategory-loadmore">
        Show More
      </div>
      </div>

  )
}

export default ShopCategory