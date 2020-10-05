import React from 'react'
import './Cart.css';
import { useStateValue } from "./StateProvider";

function Cart({ image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const remove = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title,
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

                <button onClick={remove}>
                    Remove from Cart
                   </button>
            </div>

        </div>
    )
}

export default Cart
