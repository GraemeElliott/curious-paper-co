import React from "react";
import './products-collection-view.scss';
import ProductsCollection from "../../../components/products/products-page/products-collection.component";
import { useLocation } from "react-router-dom";

const ProductsCollectionView = () => {
    const productCategory = useLocation().pathname.split("/")[2].replace("-", " ");
    return (  
        <div className="products-collection=wrapper">
            <div className="category-title"> {productCategory} </div>
            <ProductsCollection />
        </div>
    )
};

export default ProductsCollectionView;