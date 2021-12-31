import React from "react";
import './products-collection-view.scss';
import HomepageCollection from "../../../components/products/products-page/homepage-collection/homepage-collection.component";
import { useLocation } from "react-router-dom";


const HomepageCollectionView = () => {
    const collectionCategory = useLocation().pathname.split("/")[2].replace("-", " ");
    return (  
        <div className="products-collection=wrapper">
            <div className="category-title"> {collectionCategory} Collection </div>
            <HomepageCollection />
        </div>
    )
};

export default HomepageCollectionView;