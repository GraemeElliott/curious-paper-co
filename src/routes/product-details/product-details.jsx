import React from "react";
import "./product-details.scss";
import CustomButton from "../../components/partials/custom-button/custom-button";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToCart, getTotals } from "../../redux/Reducers/cartRedux";
import { useDispatch } from 'react-redux';
import { publicRequest } from "../../requestMethods";

const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[3];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get(`/products/${productId}`);
        setProduct(response.data);

      } catch (err) {}
    };

    getProduct()

  }, [productId])

  const handleAddToCart = () => {
    dispatch (addToCart({ ...product, quantity }));
    dispatch (getTotals({ ...product, quantity }));
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

        <CustomButton onClick={handleAddToCart}> Add To Cart </CustomButton>
        <div> {product.description} </div>
      </div>

    </div>
  );
};

export default ProductDetails;
