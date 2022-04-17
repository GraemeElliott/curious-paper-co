import React from "react";
import { Route } from "react-router";
import "./product-categories-page.scss";
import ProductCategoriesPageComponent from "../../../components/products/product-categories-page/product-categories-page.component";


const ProductCategoriesPage = ({ match }) => {
  return (
    <div>
        <Route exact path={`${match.path}`} 
        component = {ProductCategoriesPageComponent} />
    </div>
  );
};

export default ProductCategoriesPage;