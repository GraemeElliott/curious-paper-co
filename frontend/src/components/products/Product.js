import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../../store';
import './Product.scss';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existingItem = cartItems.find((x) => x._id === product._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const { data } = await axios.get(`/product/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="product-card">
      <Link
        to={`/products/${product.category}/${product.subcategory}/${product.slug}`}
      >
        <img
          src={product.image}
          className="card-img-top product-card-img"
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link
          to={`/products/${product.category}/${product.subcategory}/${product.slug}`}
        >
          <Card.Title>{product.name}</Card.Title>
        </Link>

        <Link to={`/brands/${product.brandId}`}>
          <Card.Title className="brand-link">{product.brand}</Card.Title>
        </Link>

        <Card.Text>£{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button className="btn-product-listing" variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button
            className="btn-product-listing"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
