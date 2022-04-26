import React from "react";
import './checkout.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import OrderSummary from "../../components/order-summary/order-summary.component";
import CustomButton from "../../components/partials/custom-button/custom-button";

const Checkout = () => {
    return (
        <div className="cart-wrapper">
            <h1 className="cart-title"> Shopping Cart </h1>
            <CustomButton> Continue Shopping</CustomButton>
            <div className="cart-info-wrapper">
                <div className="cart-items">
                    <CheckoutItem />
                </div>
                <OrderSummary />
            </div>
        </div>
    );
};

export default Checkout;