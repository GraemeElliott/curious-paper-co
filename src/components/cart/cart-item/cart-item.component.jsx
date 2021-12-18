import React from "react";
import "./cart-item.component.scss";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";


const CartItemComponent = () => {
    return (
            <div className="cart-item">
                <img className="product-image" src="https://i.ibb.co/QfpjK7P/Lucky-Rabbit.jpg" alt="product"></img>
                    <div className="product-details">
                        <div className="product-name"> Lucky Rabbit </div>
                        <div className="brand-name"> Archer & Olive </div>
                        <div className="product-size"> A5 </div>
                    </div>
                <div className="cart-details">
                    <div className="product-amount-container">
                        <Remove />
                        <div className="product-amount"> 2 </div>
                        <Add />
                    </div>
                    <div className="price"> £2.00 </div>
                </div>
            </div>       
    );
}

export default CartItemComponent;