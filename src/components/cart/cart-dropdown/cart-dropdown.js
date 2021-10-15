import React from "react";
import CustomButton from '../../global-components/customer-button/custom-button';
import './cart-dropdown.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
};

export default CartDropdown;