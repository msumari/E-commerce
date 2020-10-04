import React from 'react'
import './Checkout.css';


function Checkout() {
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
                        Your shopping basket
                    </h2>
                </div>

            </div>
            <div className="checkright">
                <h2>subtotal</h2>

            </div>


        </div>
    );

}

export default Checkout;
