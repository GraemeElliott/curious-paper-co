import React, { useState } from "react";
import './homepage-collection.component.scss';
import ProductItem from "../product-item/product-item.component";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomepageCollection = (productCollection) => {
    const [products, setProducts] = useState([]);
    const collectionCategory = useLocation().pathname.split("/")[2];

    useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const { data } = await axios.get(`/products?collection=${collectionCategory}`)
                    setProducts(data)

            } catch (err) {}
        }
        fetchProducts();
        // eslint-disable-next-line
    }, [productCollection]) 


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

export default HomepageCollection;