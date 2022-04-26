import { React, useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import './products-collection-page-item.component.scss';
import CustomButton from "../../partials/custom-button/custom-button";

const ProductsCollectionItem = ({ product }) => {
    const {productName, price, imageUrl, brand } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-item'>
        <img src={imageUrl} alt="desc" className="product-image"/>

        <div className='product-footer'>
          <span className='brand'>{brand}</span>
          <span className='name'>{productName}</span>
          <span className='price'>£{(Math.round(price*100)/100).toFixed(2)}</span>
        </div>
        <CustomButton buttonType='inverted' onClick={addProductToCart}> ADD TO CART </CustomButton>
      </div>
      )
    };


export default ProductsCollectionItem;