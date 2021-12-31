import React from "react";
import "./product-details.component.scss";
import CustomButton from "../../partials/customer-button/custom-button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[3];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`/products/`+productId)
        setProduct(data);

      } catch (err) {
        console.log(err);
      }
    }
    getProduct()

  }, [productId])

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
        <div> Qty </div>
        <CustomButton> Add To Cart </CustomButton>
        <div> {product.description} </div>
      </div>
    </div>
  );
};

export default ProductDetails;
