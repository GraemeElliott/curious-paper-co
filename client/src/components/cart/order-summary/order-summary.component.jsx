import React from "react";
import './order-summary.component.scss';
import CustomButton from "../../partials/customer-button/custom-button";
import {useSelector} from "react-redux";



const OrderSummaryComponent = () => {
    const cart = useSelector(state=>state.cart)
    return (
    
    <div className="order-summary-container">
        <h2 className="order-summary-title">Order Summary</h2>
        <div className="order-summary-wrapper">
            <div className="subtotal-wrapper order-details ">
                <h2 className="order-summary-subtitle"> Subtotal: </h2>
                <h2 className="subtotal-amount order-summary-amount"> £{cart.total} </h2>
            </div>
            <div className="shipping-wrapper order-details ">
                <h2 className="order-summary-subtitle"> Shipping: </h2>
                <h2 className="shipping-amount order-summary-amount"> £{cart.total < 30 ? 5.99 : 0.00} </h2>
            </div>
            <div className="order-total-wrapper order-details ">
                <h2 className="order-summary-subtitle"> Total: </h2>
                <h2 className="total-amount order-summary-amount"> £35.00 </h2>
            </div>
        </div>
        <CustomButton className="custom-button checkout-button"> Checkout</CustomButton>

    </div>       
    );
}

export default OrderSummaryComponent;