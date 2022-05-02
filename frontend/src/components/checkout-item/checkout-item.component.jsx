import { React } from "react";
import "./checkout-item.component.scss";
import {useSelector} from "react-redux";
import { addToCart, removeFromCart, decreaseCart } from "../../redux/cartRedux";
import { useDispatch } from 'react-redux';


import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";


const CheckoutItem = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

      const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
      };

      const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
      };

      const handleIncreaseCart = (product) => {
        dispatch(addToCart(product));
      };
    
    return (
        <div>
            {cart.cartItems.map((cartItem)=>(

                <div className="cart-item" key={cartItem._id}>
                    <img className="product-image" src={cartItem.imageUrl} alt="product"></img>
                        <div className="product-details">
                            <div className="product-name"> {cartItem.productName} </div>
                            <div className="brand-name"> {cartItem.brand} </div>
                            <div className="product-price cart-price"> £{cartItem.price} </div>
                            <div className="remove-cart-item" onClick={() => handleRemoveFromCart(cartItem)}> Remove </div>
                            
                        </div>
                    <div className="cart-details">
                        <div className="product-amount-container">
                            <Remove onClick={() => handleDecreaseCart(cartItem)}/>
                            <div className="product-amount"> {cartItem.cartQuantity} </div>
                            <Add onClick={() => handleIncreaseCart(cartItem)} />
                        </div>
                        <div className="total-product-price"> £{((cartItem.price)*cartItem.cartQuantity).toFixed(2)} </div>
                    </div>
                </div>
            ))}   
        </div>    
    );
}

export default CheckoutItem;