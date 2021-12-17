import React from "react";
import './cart.scss'
import CartItemComponent from "../../components/cart/cart-item/cart-item.component";
import OrderSummaryComponent from "../../components/cart/order-summary/order-summary.component";
import CustomButton from "../../components/partials/customer-button/custom-button";

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <h1 className="cart-title"> Shopping Cart </h1>
            <CustomButton> Continue Shopping</CustomButton>
            <div className="cart-info-wrapper">
                <div className="cart-items">
                    <CartItemComponent />
                </div>
                <OrderSummaryComponent />
            </div>
        </div>
    );
};

export default Cart;