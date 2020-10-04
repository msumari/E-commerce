import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <MenuIcon className="menu" />
      <Link to="/">
        <img className="logo" src="https://www.jd-pharmacy.com/img/logo.png" />

      </Link>

      <div className="search">
        <input
          className="search_input"
          type="text"
          placeholder="Search medicine here..."
        />
        <SearchIcon className="search_icon" />
      </div>

      <div className="navigate">
        <div className="options">
          <span className="first">Hello Customer</span>
          <span className="second">Sign in</span>
        </div>
        <div className="options">
          <span className="first">Return</span>
          <span className="second">& Orders</span>
        </div>
        <div className="options">
          <span className="first">Your</span>
          <span className="second">Health</span>
        </div>
        <Link to="/checkout">
          <div className="basket">
            <AddShoppingCartIcon />
            <span className="second basket_count">0</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
