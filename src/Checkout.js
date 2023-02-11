import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal"
function Checkout() {
    const { user } = useSelector((state) => ({ ...state }))
    return (
        <div className="checkout">
            <div className='checkoutLeft'>
                <div>
                    <h2 className='checkoutTitle'>
                        Your Shopping Basket
                    </h2>
                    {user.basket.map((item, i) => (
                        <div className="cp" key={i}>
                            <CheckoutProduct
                                basket={user.basket}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        </div>

                    ))}

                </div>
            </div>
            <div className='checkoutRight'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout