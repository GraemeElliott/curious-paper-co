import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/cpc-logo.jpg";
import "./header.component.scss";

const Header = () => (
  <div className="header">
    <div className="header-top-wrapper">
      <div className="search-bar header-text"> Search </div>
      <Link className="logo-wrapper" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <div className="account-links-wrapper header-text">
        <Link className="account-link" to="/sign-in">SIGN IN / REGISTER</Link>
      </div>
    </div>
    <div className="header-bottom-wrapper">
      <Link className="header-link" to="/products">
        PRODUCTS
      </Link>
      <Link className="header-link" to="/about-us">
        ABOUT US
      </Link>
      <Link className="header-link" to="/contact-us">
        CONTACT US
      </Link>
    </div>
  </div>
);


export default Header;