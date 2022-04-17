import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import ProductsCollectionItem from "./products-collection-page-item.component";
import './products-collection-page.component.scss';


const ProductsCollectionPageComponent = () => {

    const { products } = useContext(ProductsContext)

    return (
        <div className='collection-preview'>
            {products.map ((product) => (
                <ProductsCollectionItem key={product.id} product={product} />
                
            ))}
        </div>
    );

};

export default ProductsCollectionPageComponent;