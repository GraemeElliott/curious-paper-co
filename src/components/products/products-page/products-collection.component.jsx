import React from "react";
import './products-collection.component.scss';
import ProductItem from "./product-item/product-item.component";

const ProductsCollection = () => {
    return (
        <div>
            <div className="category-title">Category Name</div>
            <div className="products-collection-wrapper">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )

}

export default ProductsCollection;