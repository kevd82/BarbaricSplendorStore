import React, { useContext } from 'react';
import {ShopContext} from "../Context/ShopContext.js";
import {useParams} from "react-router-dom";
import DisplayProduct from "../Components/DisplayProduct/DisplayProduct.js";

const Product = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id===Number(productId));
  return (
    <div>
      <DisplayProduct product={product}/>
    </div>
  )
}

export default Product;
