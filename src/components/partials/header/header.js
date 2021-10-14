import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../../assets/cpc-logo.jpg";
import "./header.scss";
import { auth } from '../../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="header-top-wrapper">
      <div className="psudo-div"></div>
      <Link className="logo-wrapper" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <div className="account-links-wrapper header-text">
        {
          currentUser ?
        
        <div className="account-link sign-out" onClick={() => auth.signOut()}>SIGN OUT </div>
        :
        <Link className="account-link" to="/sign-in">SIGN IN / REGISTER</Link>
        }

      </div>
    </div>
    <div className="navbar-links-wrapper">
      <Link className="navbar-link" to="/products">
        PRODUCTS
      </Link>
      <Link className="navbar-link" to="/about-us">
        ABOUT US
      </Link>
      <Link className="navbar-link" to="/contact-us">
        CONTACT US
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
