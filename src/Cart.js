import React from 'react'
import './Cart.css';
import { useStateValue } from "./StateProvider";

function Cart({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const fromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }
    return (
        <div className="cart">
            <img className='image' src={image} />

            <div className="info">
                <p className="title">
                    {title}
                </p>
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

                <button onClick={fromCart}>
                    Remove
                   </button>
            </div>

        </div>
    )
}

export default Cart
