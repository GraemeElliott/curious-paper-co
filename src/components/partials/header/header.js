import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/cpc-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="header-top-wrapper">
      <div className="navbar-text navbar-search search-text">
        <FontAwesomeIcon className="navbar-text faSearch" icon={faSearch} />
        SEARCH
      </div>
      <Link className="logo-container" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <div className="navbar-text account-links">
        <Link className="account-link" to="/sign-in">SIGN IN / REGISTER</Link>
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

export default Header;
