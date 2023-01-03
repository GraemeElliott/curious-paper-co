import React from 'react';
import { Link } from 'react-router-dom';
import './product-categories-page-panel.component.scss';

const ProductCategoriesPageItem = ({ category, imageUrl, categoryId }) => {
  return (
    <Link
      className="products-directory-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      to={`${categoryId}`}
    >
      <div className="titles">
        <h3 className="category">{category}</h3>
        <h3 className="shop-now-link">SHOP NOW</h3>
      </div>
    </Link>
  );
};

export default ProductCategoriesPageItem;
