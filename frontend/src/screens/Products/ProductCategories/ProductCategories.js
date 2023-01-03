import React from 'react';
import './ProductCategories.scss';
import ProductCategoriesPagePanel from '../../../components/products/product-categories-page-panel/product-categories-page-panel.component';

class ProductCategoriesPage extends React.Component {
  constructor() {
    super();

    this.state = {
      productCategories: [
        {
          category: 'Notebooks',
          imageUrl: 'https://i.ibb.co/XbRPD1n/notebooks.jpg',
          categoryId: 'notebooks',
          linkUrl: 'products/notebooks',
        },
        {
          category: 'Diaries and Planners',
          imageUrl:
            'https://i.ibb.co/xsbLmg8/hope-house-press-leather-diary-studio-PJzc7-LOt2-Ig-unsplash.jpg',
          categoryId: 'diaries-planners',
          linkUrl: 'products/diaries-planners',
        },
        {
          category: 'Washi Tape',
          imageUrl: 'https://i.ibb.co/0cSrqt5/washi-tape.jpg',
          categoryId: 'washi-tape',
          linkUrl: 'products/washi-tape',
        },
        {
          category: 'Pens and Pencils',
          imageUrl: 'https://i.ibb.co/vPNCzfM/pens-pencils.jpg',
          categoryId: 'pens-pencils',
          linkUrl: 'products/pens-pencils',
        },
        {
          category: 'Desk Items',
          imageUrl:
            'https://i.ibb.co/t4CHCq2/kari-shea-t-OVmshavtoo-unsplash.jpg',
          categoryId: 'desk-items',
          linkUrl: 'products/desk-items',
        },
        {
          category: 'Prints and Accessories',
          imageUrl: 'https://i.ibb.co/KXS7D4R/prints-accessories.jpg',
          categoryId: 'prints-accessories',
          linkUrl: 'products/prints-accessories',
        },
      ],
    };
  }

  render() {
    return (
      <div className="product-directory-menu">
        {this.state.productCategories.map(
          ({ category, imageUrl, categoryId, linkUrl }) => (
            <ProductCategoriesPagePanel
              key={categoryId}
              category={category}
              imageUrl={imageUrl}
              linkUrl={linkUrl}
              categoryId={categoryId}
            />
          )
        )}
      </div>
    );
  }
}

export default ProductCategoriesPage;
