import React from "react";
import { withRouter } from "react-router-dom";
import "./products-directory-item.scss";

const ProductsDirectoryItem = ({ category, imageUrl, pageId, history, match }) => {
  return (
    <div
      className="products-directory-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={() => history.push(`${match.url}/${pageId}`)}
    >
      <div className="titles">
        <h3 className="category">{category}</h3>
        <h3 className="shop-now-link">
          SHOP NOW
        </h3>
      </div>
    </div>
  );
};

export default withRouter (ProductsDirectoryItem);
