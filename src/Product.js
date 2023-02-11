import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import "./product.css"
function Product({ basket, setBasket, id, title, image, price, rating }) {
    // const [state, dispatch] = useStateValue();
    // const [item, setItem] = useState(null)
    const { user } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch()
    const addToBasket = () => {
        const item = {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        }
        if (user) {
            setBasket([...basket, item])
            dispatch({
                type: 'ADD',
                payload: item
            })
        } else {
            toast('login first')
        }

    };

    return (

        <div className='product'>
            <div className='productInfo'>
                <p>{title}</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='productRating'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}

                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product