import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductItem from "../../components/products-collection-item/products-collection-item.component";
import { publicRequest } from "../../requestMethods";

const ProductsByCategory = ({productCategory}) => {
    const [products, setProducts] = useState([]);
    const urlCategory = useLocation().pathname.split("/")[2];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await publicRequest.get(`/products?category=${urlCategory}`)
                setProducts(response.data)
                
            } catch (err){}
        };

        fetchProducts();
        // eslint-disable-next-line
    }, [productCategory]);

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

export default ProductsByCategory;