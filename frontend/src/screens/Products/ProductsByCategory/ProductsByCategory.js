import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import './ProductsByCategory.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../../../components/products/Product';
import LoadingComponent from '../../../components/partials/LoadingComponent/LoadingComponent';
import MessageAlert from '../../../components/partials/MessageAlert/MessageAlert';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductsByCategory() {
  const urlCategory = useLocation().pathname.split('/')[2];
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/products/${urlCategory}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, [urlCategory]);
  return (
    <div>
      <Helmet>
        <title>Curious Paper Co.</title>
      </Helmet>
      <h1 className="product-category-title">
        {urlCategory.replace(/-/g, ' ')}
      </h1>
      <div className="products">
        {loading ? (
          <LoadingComponent />
        ) : error ? (
          <MessageAlert variant="danger">{error}</MessageAlert>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default ProductsByCategory;
