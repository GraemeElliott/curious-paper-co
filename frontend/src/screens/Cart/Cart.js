import { useContext } from 'react';
import { Store } from '../../store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageAlert from '../../components/partials/MessageAlert/MessageAlert';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.scss';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Delete from '@mui/icons-material/Delete';

export default function Cart() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, product is out of stock.');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/sign-in?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={12}>
          {cartItems.length === 0 ? (
            <MessageAlert>
              Cart is empty. <Link to="/">Go Shopping!</Link>
            </MessageAlert>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-img-thumbnail"
                      ></img>{' '}
                    </Col>
                    <Col md={4}>
                      <Row>
                        <Link
                          className="cart-product-name"
                          to={`/products/${item.category}/${item.subcategory}/${item.slug}`}
                        >
                          {item.name}
                        </Link>

                        <Link
                          className="cart-product-brand"
                          to={`/products/brands/${item.brandId}`}
                        >
                          {item.brand}
                        </Link>
                      </Row>
                    </Col>
                    <Col md={2}>
                      {item.quantity === 1 ? (
                        <Remove disabled></Remove>
                      ) : (
                        <Remove
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                        ></Remove>
                      )}{' '}
                      <span className="cart-product-qty">{item.quantity}</span>{' '}
                      <Add
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      ></Add>
                    </Col>
                    <Col md={2} className="cart-product-price">
                      £{item.price * item.quantity.toFixed(2)}
                    </Col>
                    <Col md={2}>
                      <Delete onClick={() => removeItemHandler(item)}></Delete>
                    </Col>
                    <hr class="solid"></hr>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Row>
          <Col md={7}></Col>
          <Col>
            <ListGroup.Item className="cart-subtotal">
              <h5>
                Subtotal : £
                {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </h5>
            </ListGroup.Item>
          </Col>
          <Col md={2}>
            <ListGroup.Item>
              <div className="d-grid">
                <Button
                  type="button"
                  variant="primary"
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </ListGroup.Item>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
