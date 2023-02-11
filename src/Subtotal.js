import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const basket = JSON.parse(localStorage.getItem('amazon-user')).basket
    const history = useNavigate()
    const payment = () => {
        if (basket.length != 0) {
            history("/payment")
        }
        else {
            alert("Your Shopping Basket is Empty")
        }
    }
    // console.log(s)


    return (
        <div className='subtotal'>
            <CurrencyFormat
                value={getBasketTotal(basket)}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotalGift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )
                }
            />
            <button onClick={payment}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal