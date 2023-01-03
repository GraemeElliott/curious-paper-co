import { useContext } from 'react';
import { Store } from '../../../store';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import logo from '../../../assets/cpc-logo.jpg';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

import './Header.scss';

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    window.location.href = '/sign-in';
  };

  return (
    <header>
      <Navbar expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            <img className="navbar-img" src={logo} alt="" width="400" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  w-100  justify-content-end">
              <Link to="/cart" className="nav-link nav-cart">
                <ShoppingCartOutlined color="action" />
                {cart.cartItems.length > 0 && (
                  <Badge className="cart-icon" pill bg="success">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              {userInfo ? (
                <NavDropdown title="Account" id="collapsible-nav-dropdown">
                  <LinkContainer to="/account">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/order-history">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <>
                  <Link className="nav-link" to="/sign-in">
                    Sign In
                  </Link>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/users">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
