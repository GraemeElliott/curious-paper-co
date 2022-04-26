import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-page-item.component.scss';

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const CheckoutItem = ({ cartItem }) => {
    const { productName, brand, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="desc"/>
            </div>
            
            <div className='product-details'>
                <span className='product-name'> {productName} </span>
                <span className='brand'> {brand} </span>
            </div>

            <span className='quantity'>
                <Remove className='decrement-button' onClick={removeItemHandler}/>

                <span className='cart-quantity'>{quantity}</span>

                <Add className='increment-button' onClick={addItemHandler}/>
    
            </span>

            <span className='price'>£ {(Math.round(price*100)/100).toFixed(2)}</span>
            <span className='checkout-remove-button' onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
};

export default CheckoutItem;