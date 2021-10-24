import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductsCollection from "../products-page/products-page-collection/products-page-collection";
import { selectCollections } from "../../redux/products/products.selectors";

import './products-categorised.scss';

const ProductsCategorised = ({ products }) => {
    return (
    <div className="products-categorised">
        {products.map(({ id, ...otherCollectionProps }) => (
          <ProductsCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
    )
};

const mapStateToProps = createStructuredSelector ({
    products: selectCollections
  });

  export default connect(mapStateToProps)(ProductsCategorised);