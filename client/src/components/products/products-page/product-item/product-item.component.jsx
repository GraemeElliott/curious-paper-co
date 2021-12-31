import React from "react";
import './product-item.component.scss';
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    return (
        <div className='product-item'>
        <Link className='product-image'
        style={{
            backgroundImage: `url(${product.imageUrl})`}} to={`/products/${product.productCategory}/${product._id}`}/>
        <div className='product-footer'>
            <div className="brand-link">
                <Link className='brand' to={`/products/${product.brandId}`}> {product.brand} </Link>
            </div>
            <Link className="product-details-footer" to={`/products/${product.productCategory}/${product._id}`}>
                <div className='product-name'>{product.productName}</div>
                <div className='price'>£{product.price}</div>
            </Link>
        </div>
      </div>
      
    );
};

export default ProductItem;