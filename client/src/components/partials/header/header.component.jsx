import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/cpc-logo.jpg";
import "./header.component.scss";
import { useSelector } from 'react-redux';

import Badge from "@mui/material/Badge";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  
  return (
  <div className="header-container">
    <div className="header-top-wrapper">
      <div className="search-bar">
        <Search className="search-icon"/>
        <div className="search-text header-text"> Search </div>
      </div>
      <Link className="logo-wrapper" to="/">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <div className="account-links-wrapper header-text">
        <Link className="account-link" to="/sign-in">SIGN IN / REGISTER</Link>
        <Link to="/cart">
          <Badge className="cart-icon" badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
          </Badge>
        </Link>
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
    )
  };


export default Header;