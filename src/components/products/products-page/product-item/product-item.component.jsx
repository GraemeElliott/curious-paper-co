import React from "react";
import './product-item.component.scss';
import { Link } from "react-router-dom";

const ProductItem = () => {
    return (
        <div className='product-item'>
        <div className='product-image'
        style={{
            backgroundImage: 'url("https://i.ibb.co/QfpjK7P/Lucky-Rabbit.jpg")'}}/>
        <div className='product-footer'>
            <div className="brand-link">
                <Link className='brand' to="/brands/brand">Brand Name </Link>
            </div>
            <Link className="product-details-footer" to="/products/notebooks/product">
                <div className='product-name'>Product Name</div>
                <div className='price'>£12</div>
            </Link>
        </div>
      </div>
      
    );
};




export default ProductItem;