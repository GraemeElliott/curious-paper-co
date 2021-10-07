import React from "react";
import { Link } from "react-router-dom";
import "./products-directory-item.scss";

const ProductsDirectoryItem = ({ category, imageUrl, id }) => {
  return (
    <Link
      className="products-directory-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      to={`${id}`}
    >
      <div className="titles">
        <h1 className="category">{category}</h1>
        <Link className="shop-now-link" to={`${id}`}>
          SHOP NOW
        </Link>
      </div>
    </Link>
  );
};

export default ProductsDirectoryItem;
