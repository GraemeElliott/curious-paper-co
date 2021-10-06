import React from "react";
import { Link } from "react-router-dom";
import "./image-category-panel.scss";

const ImageCategoryPanel = () => {
  return (
      <div className="category-panel-wrapper">
    <Link className="image-category-panel">
      <div className="titles">
        <p className="image-cat-header-1">ARCHER & OLIVE</p>
        <Link className="image-cat-header-2"> SHOW NOW </Link>
      </div>
    </Link>
    </div>
  );
};

export default ImageCategoryPanel;
