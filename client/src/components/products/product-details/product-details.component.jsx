import React from "react";
import "./product-details.component.scss";
import CustomButton from "../../partials/customer-button/custom-button";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addProduct } from "../../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[3];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${productId}`)
        setProduct(data);

      } catch (err) {}
    };

    getProduct()

  }, [productId])

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity-1)
    } else {
      setQuantity(quantity+1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...product, quantity}));
  };

  return (
    <div className="product-details-wrapper">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${product.imageUrl})`
          }}
      />
        
      <div className="product-details">
        <div> {product.productName} </div>
        <div> {product.brand} </div>
        <div> £{product.price} </div>
        <div className="quantity-container">
          <ArrowBackIosIcon onClick={() => handleQuantity("dec")} /> 
                <span className="product-quantity">{quantity}</span>
            <ArrowForwardIosIcon onClick={() => handleQuantity("inc")} /> 
          </div>

        <CustomButton onClick={handleClick}> Add To Cart </CustomButton>
        <div> {product.description} </div>
      </div>

    </div>
  );
};

export default ProductDetails;
