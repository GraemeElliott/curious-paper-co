import { React, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from './checkout-page-item.component';
import './checkout-page.component.scss';

const CheckoutPageComponent = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    
    return (
        <div className='checkout-container'>

                {cartItems.map((cartItem) => 
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )}

                <span className='checkout-total'>TOTAL: £ {(Math.round(cartTotal*100)/100).toFixed(2)}</span>

        </div>
    )
};

export default CheckoutPageComponent;
