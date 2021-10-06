import React from "react";
import { Link } from "react-router-dom";
import "./text-category-panel.scss";

const TextCategoryPanel = () => {
  return (
    <div className="category-panel-wrapper">
    <Link className="text-category-panel">
        <p className="text-cat-header-1">FOR DOODLING & SCRIBBLING</p>
        <p className="text-cat-header-2"> Notebooks - Autumnal Collection </p>
        <Link className="text-cat-link">SHOP NOW</Link>
    </Link>
    </div>
  );
};

export default TextCategoryPanel;
