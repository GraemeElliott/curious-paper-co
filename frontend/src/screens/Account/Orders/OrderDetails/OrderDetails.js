import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import LoadingComponent from '../../../../components/partials/LoadingComponent/LoadingComponent';
import MessageAlert from '../../../../components/partials/MessageAlert/MessageAlert';
import { Store } from '../../../../store';
import { getError } from '../../../../utils';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false };

    case 'SHIP_REQUEST':
      return { ...state, loadingShip: true };
    case 'SHIP_SUCCESS':
      return { ...state, loadingShip: false, successShip: true };
    case 'SHIP_FAIL':
      return { ...state, loadingShip: false };
    case 'SHIP_RESET':
      return {
        ...state,
        loadingShip: false,
        successShip: false,
      };

    default:
      return state;
  }
}
export default function OrderDetails() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [
    { loading, error, order, successPay, loadingPay, loadingShip, successShip },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
    successPay: false,
    loadingPay: false,
  });

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(`/orders/${order._id}/pay`, details, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('Payment successful');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate('/sign-in');
    }
    if (
      !order._id ||
      successPay ||
      successShip ||
      (order._id && order._id !== orderId)
    ) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: 'PAY_RESET' });
      }
      if (successShip) {
        dispatch({ type: 'SHIP_RESET' });
      }
    } else {
      const loadPaypalScript = async () => {
        const { data: clientId } = await axios.get('/keys/paypal', {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': clientId,
            currency: 'GBP',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      loadPaypalScript();
    }
  }, [
    order,
    userInfo,
    orderId,
    navigate,
    paypalDispatch,
    successPay,
    successShip,
  ]);

  async function shipOrderHandler() {
    try {
      dispatch({ type: 'Ship_REQUEST' });
      const { data } = await axios.put(
        `/orders/${order._id}/ship`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'SHIP_SUCCESS', payload: data });
      toast.success('Order has been dispatched');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'SHIP_FAIL' });
    }
  }

  return loading ? (
    <LoadingComponent></LoadingComponent>
  ) : error ? (
    <MessageAlert variant="danger">{error}</MessageAlert>
  ) : (
    <div>
      <Helmet>
        <title>Order {orderId}</title>
      </Helmet>
      <h1 className="my-3">Order #{orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping Address</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                <strong>Address: </strong> {order.shippingAddress.address},{' '}
                <br />
                {order.shippingAddress.city}, <br />
                {order.shippingAddress.postalCode}, <br />
                {order.shippingAddress.country} <br />
              </Card.Text>
              {order.isShipped ? (
                <MessageAlert variant="success">
                  Dispatched at {order.shippedAt}
                </MessageAlert>
              ) : (
                <MessageAlert variant="danger">Not Dispatched</MessageAlert>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              {order.isPaid ? (
                <MessageAlert variant="success">
                  Paid at {order.paidAt}
                </MessageAlert>
              ) : (
                <MessageAlert variant="danger">Not Paid</MessageAlert>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <ListGroup variant="flush">
                {order.orderItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                      </Col>
                      <Col md={4}>
                        <Row>
                          <Link
                            to={`/product/${item.category}/${item.subcategory}/${item.slug}`}
                          >
                            <strong>{item.name}</strong>
                          </Link>
                        </Row>
                        <Row>
                          <Link to={`/products/brands/${item.brandId}`}>
                            {item.brand}
                          </Link>
                        </Row>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>£{item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>£{order.itemsPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>£{order.shippingPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>£{order.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {!order.isPaid && (
                  <ListGroup.Item>
                    {isPending ? (
                      <LoadingComponent />
                    ) : (
                      <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    )}
                    {loadingPay && <LoadingComponent></LoadingComponent>}
                  </ListGroup.Item>
                )}
                {userInfo.isAdmin && order.isPaid && !order.isShipped && (
                  <ListGroup.Item>
                    {loadingShip && <LoadingComponent></LoadingComponent>}
                    <div className="d-grid">
                      <Button type="button" onClick={shipOrderHandler}>
                        Dispatch Order
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
