import React from "react";

import './checkout-item.scss';

const CheckoutItem = ({ cartItem: { productName, imageUrl, price, quantity} }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{productName}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
);

export default CheckoutItem;