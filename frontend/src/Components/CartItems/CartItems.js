import React, { useContext } from 'react';
import "./CartItems.css";
import {ShopContext} from "../../Context/ShopContext.js";
import remove_icon from "../Assets/cart_cross_icon.png";


const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon"/>
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.price*cartItems[e.id]}</p>
                            <div className="cartitems-remove">
                            <button onClick={()=>{removeFromCart(e.id)}}><img src={remove_icon}  alt=""/> Remove Item</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="checkout-button">Proceed To Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox">

                        <input type="text" placeholder="Enter promo code here"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;