import React from "react";
import { connect } from "react-redux";
import './products-page-item.scss';
import CustomButton from "../../global-components/customer-button/custom-button";
import { addItem } from "../../../redux/cart/cart.actions";

const ProductsItem = ({ item, addItem }) => {
  const {name, price, imageUrl } = item;

  return (
    <div className='products-item'>
    <div
      className='product-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='products-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted> ADD TO CART </CustomButton>
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect (null, mapDispatchToProps)(ProductsItem);