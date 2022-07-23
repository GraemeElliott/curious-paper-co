import { React, useState, useEffect } from "react";
import './order-summary.component.scss';
import CustomButton from "../partials/custom-button/custom-button";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { getTotals } from "../../redux/Reducers/cartRedux";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";

const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY

const OrderSummary = () => {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();
  
    const onToken = (token) => {
      setStripeToken(token)
    };
  
    useEffect (() => {
        dispatch(getTotals());

      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: cart.cartTotalAmount*100            
            }
          )
            console.log (res.data)
            // navigate('/')
  
        } catch (error) {
          console.log (error)
  
        }
      }
      stripeToken && makeRequest();
    }, [stripeToken, navigate, cart.cartTotalAmount, cart, dispatch])

    return (
    
    <div className="order-summary-container">
        <h2 className="order-summary-title">Order Summary</h2>
        <div className="order-summary-wrapper">
            <div className="subtotal-wrapper order-details ">
                <h2 className="order-summary-subtitle"> Subtotal: </h2>
                <h2 className="subtotal-amount order-summary-amount"> £{cart.cartTotalAmount.toFixed(2)} </h2>
            </div>
            <div className="shipping-wrapper order-details ">
                <h2 className="order-summary-subtitle"> Shipping: </h2>
                <h2 className="shipping-amount order-summary-amount"> £{cart.cartTotalAmount < 30 ? 5.99 : 0.00} </h2>
            </div>
            <div className="order-total-wrapper order-details ">
                <h2 className="order-summary-subtitle"> Total: </h2>
                <h2 className="total-amount order-summary-amount"> £{cart.cartTotalAmount < 30 ? (cart.cartTotalAmount + 5.99).toFixed(2) : cart.cartTotalAmount.toFixed(2)} </h2>
            </div>
        </div>
            <StripeCheckout
            name="Curious Paper Co."
            amount={cart.cartTotalAmount*100}
            billingAddress
            shippingAddress
            token={onToken}
            stripeKey={stripeKey}
            >
            <CustomButton className="custom-button checkout-button"> Checkout</CustomButton>
            </StripeCheckout>
        

    </div>       
    );
}

export default OrderSummary;