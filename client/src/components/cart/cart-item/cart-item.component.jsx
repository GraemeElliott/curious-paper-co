import React from "react";
import "./cart-item.component.scss";
import {useSelector} from "react-redux";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";


const CartItemComponent = () => {
    const cart = useSelector(state=>state.cart)
    return (
        <div>
            {cart.products.map(product=>(

                <div className="cart-item">
                    <img className="product-image" src={product.imageUrl} alt="product"></img>
                        <div className="product-details">
                            <div className="product-name"> {product.productName} </div>
                            <div className="brand-name"> {product.brand} </div>
                            <div className="product-price cart-price"> £{product.price} </div>
                            
                        </div>
                    <div className="cart-details">
                        <div className="product-amount-container">
                            <Remove />
                            <div className="product-amount"> {product.quantity} </div>
                            <Add />
                        </div>
                        <div className="total-product-price"> £{product.price*product.quantity} </div>
                    </div>
                </div>
            ))}   
        </div>    
    );
}

export default CartItemComponent;