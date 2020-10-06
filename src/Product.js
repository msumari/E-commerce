import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const toCart = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        rating: rating,
        title: title,
        image: image,
        price: price,
      },
    })
  }

  return (
    <div className="product">
      <div className="info">
        <p><strong>{title}</strong></p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={toCart}>Add to cart</button>
    </div>
  );
}

export default Product;
