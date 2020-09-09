import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src="https://www.jd-pharmacy.com/img/logo.png" />

      <div className="search">
        <input className="search_input" type="text" />
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
      </div>
    </div>
  );
}

export default Header;