import React from "react";
import './cart.scss'
import CartItem from "../../components/cart-item/cart-item.component";
import OrderSummary from "../../components/order-summary/order-summary.component";
import CustomButton from "../../components/partials/custom-button/custom-button";

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <h1 className="cart-title"> Shopping Cart </h1>
            <CustomButton> Continue Shopping</CustomButton>
            <div className="cart-info-wrapper">
                <div className="cart-items">
                    <CartItem />
                </div>
                <OrderSummary />
            </div>
        </div>
    );
};

export default Cart;