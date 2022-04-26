import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../../../contexts/categories.context";

import ProductsCollectionItem from "../products-collection-page-item.component";

const ProductCategoryPage = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <div>
            {
                products &&
                products.map((product) => <ProductsCollectionItem key={product.id} product={product} />)
            }
        </div>
    )

};

export default ProductCategoryPage