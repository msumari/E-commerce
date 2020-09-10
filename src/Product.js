import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="info">
        <p>The lean startup</p>
        <p className="price">
          <small>$</small>
          <strong>20.00</strong>
        </p>
        <div className="rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        className="product_image"
        src="https://i5.walmartimages.ca/images/Enlarge/432/325/6000198432325.jpg"
        alt=""
      />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
