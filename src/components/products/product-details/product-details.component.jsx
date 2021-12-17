import React from "react";
import "./product-details.component.scss";
import CustomButton from "../../partials/customer-button/custom-button";

const ProductDetails = () => {
  return (
    <div className="product-details-wrapper">
      <div
        className="product-image"
        style={{
          backgroundImage: 'url("https://i.ibb.co/QfpjK7P/Lucky-Rabbit.jpg")'
        }}
      />

      <div className="product-details">
        <div> Product Name with a long name like this one and then some </div>
        <div> Brand </div>
        <div> Price </div>
        <div> Qty </div>
        <CustomButton> Add To Cart </CustomButton>
        <div> Description </div>
      </div>
    </div>
  );
};

export default ProductDetails;
