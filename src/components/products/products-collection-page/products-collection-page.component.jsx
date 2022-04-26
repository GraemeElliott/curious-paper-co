import { Routes, Route } from 'react-router-dom';
import ProductCategoriesPage from '../product-categories-page/product-categories-page.component';

import ProductCategoryPage from './product-category-page/product-category-page.component';

import './products-collection-page.component.scss';


const ProductsCollection = () => {

    return (
        <Routes>
            <Route index element = {<ProductCategoriesPage />} />
            <Route path="/:category" element={<ProductCategoryPage />}/>

        </Routes>
    );

};

export default ProductsCollection;