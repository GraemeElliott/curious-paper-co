import React, { useState } from "react";
import './products-collection.component.scss';
import ProductItem from "./product-item/product-item.component";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductsCollection = (category) => {
    const [products, setProducts] = useState([]);
    const productCategory = useLocation().pathname.split("/")[2];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`/products?category=${productCategory}`)

                setProducts(data);
            } catch (err){}
        }
        fetchProducts();
        // eslint-disable-next-line
    }, [category]);

    return (
        <div className="products-collection-list">
            {
                products.map((product) => (
                    <ProductItem product={product} key={product._id} />
                ))
            }

        </div>
    )

}

export default ProductsCollection;