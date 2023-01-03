import axios from 'axios';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import './ProductDetails.scss';
import LoadingComponent from '../../../components/partials/LoadingComponent/LoadingComponent';
import MessageAlert from '../../../components/partials/MessageAlert/MessageAlert';
import { getError } from '../../../utils';
import { Store } from '../../../store';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const { category, subcategory, slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(
          `/products/${category}/${subcategory}/${slug}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [category, subcategory, slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/product/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };
  return loading ? (
    <LoadingComponent />
  ) : error ? (
    <MessageAlert variant="danger">{error}</MessageAlert>
  ) : (
    <div>
      <Row>
        <Col md={7}>
          <img
            className="img-large"
            src={selectedImage || product.image}
            alt={product.name}
          ></img>
          <ListGroup.Item>
            <Row xs={1} md={2} className="g-2">
              {[product.image, ...product.images].map((x) => (
                <Col className="product-img-col" key={x}>
                  <Card className="product-img-thumbnail">
                    <Button
                      className="thumbnail"
                      type="button"
                      variant="light"
                      onClick={() => setSelectedImage(x)}
                    >
                      <Card.Img variant="top" src={x} alt="product" />
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </ListGroup.Item>
        </Col>

        <Col md={5} className="product-details-col">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>

            <ListGroup className="product-details">
              <ListGroup.Item>
                <Link to={`/products/brands/${product.brandId}`}>
                  <Card.Title>{product.brand}</Card.Title>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Title className="product-price">
                  £{product.price.toFixed(2)}
                </Card.Title>
              </ListGroup.Item>
              <ListGroup.Item>
                <Col>
                  {product.countInStock > 0 ? (
                    <Badge bg="success">In Stock</Badge>
                  ) : (
                    <Badge bg="danger">Unavailable</Badge>
                  )}
                </Col>
              </ListGroup.Item>
              <Col>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        onClick={addToCartHandler}
                        variant="primary"
                        className="add-to-cart-btn"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </Col>
              <ListGroup.Item>
                <Card.Text className="product-description">
                  {product.description}
                </Card.Text>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
