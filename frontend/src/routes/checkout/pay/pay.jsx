import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pay.scss";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";


const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY


const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token)
  };

  useEffect (() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000            
          }
        )
          console.log (res.data)
          navigate('/')

      } catch (error) {
        console.log (error)

      }
    }
    stripeToken && makeRequest();
  }, [stripeToken, navigate])


  return (
    <div
      style={{
        height: "100vh",
        display:"flex",
        alignItems: "center",
        justifyContent: "center"
      }}>

        <StripeCheckout
        name="Curious Paper Co."
        amount={2000}
        token={onToken}
        stripeKey={stripeKey}
        >
        <button
          style= {{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white"
          }}>
            Pay Now
        </button>

        </StripeCheckout>

      

    </div>



  );
};

export default Pay;
