import React from 'react'
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Cart from "./Cart"

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">

            <div className="checkleft">
                <img
                    className="ad"
                    src="https://somatopublications.com/admin/uploads/journals/Current%20Trends%20in%20Medicine%20Banner.jpg"
                    alt=""
                />
                <div>
                    <h2 className="title">
                        Your Cart
                    </h2>
                    {basket.map(item => (
                        <Cart
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}
                    {/* Basket item */}
                    {/* Basket item */}
                    {/* Basket item */}

                </div>

            </div>
            <div className="checkright">
                <Subtotal />

            </div>


        </div>
    );

}

export default Checkout;
