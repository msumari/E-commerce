import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <img
          className="banner"
          src="https://www.adroitinfosystems.com/images/siteimages/pages/finalImgforpages/epharmacy1.jpg"
          alt=" "
        />
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
