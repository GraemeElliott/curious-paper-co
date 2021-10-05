import React from "react";
import "./categories.scss";

import ImageCategoryPanel from "./category-panels/image-category-panel";
import TextCategoryPanel from "./category-panels/text-category-panel";

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <TextCategoryPanel></TextCategoryPanel>
      <TextCategoryPanel></TextCategoryPanel>
      <TextCategoryPanel></TextCategoryPanel>
      <TextCategoryPanel></TextCategoryPanel>
      <TextCategoryPanel></TextCategoryPanel>
      <TextCategoryPanel></TextCategoryPanel>
    </div>
  );
};

export default Categories;
