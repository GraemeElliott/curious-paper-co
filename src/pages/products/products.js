import React from 'react';

import SHOP_DATA from '../../components/products-data/products-data';

import ProductsCollection from '../../components/products-page/products-page-collection/products-page-collection.js';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='products-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <ProductsCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ProductsPage;