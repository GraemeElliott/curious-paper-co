import React from "react";
import { Route } from "react-router";
import "./products-directory.scss";
import ProductsDirectoryComponent from "../../../components/products/products-directory/products-directory.component";


const ProductsDirectoryPage = ({ match }) => {
  return (
    <div>
        <Route exact path={`${match.path}`} 
        component = {ProductsDirectoryComponent} />
    </div>
  );
};

export default ProductsDirectoryPage;