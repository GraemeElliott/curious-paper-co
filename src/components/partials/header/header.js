import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/cpc-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="header-top">
      <div className="navbar-search search-text">
        <FontAwesomeIcon className="faSearch" icon={faSearch} />
        SEARCH
      </div>
      <Link className="logo-container" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <div className="account-links">
        <Link className="account-link" to="/sign-in">SIGN IN/</Link>
        <Link className="account-link" to="/register">REGISTER</Link>
      </div>
    </div>
    <div className="navbar-links">
      <Link className="navbar-link" to="/shop">
        SHOP
      </Link>
      <Link className="navbar-link" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
