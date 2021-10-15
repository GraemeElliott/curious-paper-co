import React from 'react';

import ProductsItem from '../products-page-item/products-page-item';

import './products-page-collection.scss';

const ProductsCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <ProductsItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ProductsCollection;