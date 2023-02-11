import React from 'react'
import { useDispatch } from 'react-redux';
import "./CheckoutProduct.css"

function CheckoutProduct({ basket, id, title, image, price, rating, hideButton }) {
    const addToBasket = () => {


    };
    const remove = () => {
        const item = {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }
        let i = basket.findIndex((e) => e.id === id)
        basket.splice(i, 1)
        const user = JSON.parse(localStorage.getItem('amazon-user'))
        user.basket = basket
        localStorage.setItem('amazon-user', JSON.stringify(user))
        dispatch({
            type: 'REMOVE',
            payload: item
        })
    }
    const dispatch = useDispatch()
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image}></img>
            <div className='checkoutProductInfo'>
                <p className='checkoutProductTitle'>{title}</p>
                <p className='checkoutProductPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProductRating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <div className='buttons'>
                        <button onClick={remove} className='removeButton'>-</button>
                        {/* <p>hey</p> */}
                        <button onClick={addToBasket} >+</button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CheckoutProduct