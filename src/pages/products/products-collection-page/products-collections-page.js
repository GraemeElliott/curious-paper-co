import React from "react";
import { Route } from "react-router";
// import "./product-categories-page.scss";
import ProductsCollectionPageComponent from "../../../components/products/products-collection-page/products-collection-page.component";


const ProductsCollectionPage = ({ match }) => {
  return (
    <div>
        <Route exact path={`${match.path}`} 
        component = {ProductsCollectionPageComponent} />
    </div>
  );
};

export default ProductsCollectionPage;