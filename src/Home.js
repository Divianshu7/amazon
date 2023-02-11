import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Home.css"
import Product from './Product'
function Home() {
    let userc = JSON.parse(localStorage.getItem('amazon-user'))
    const [basket, setBasket] = useState(userc?.basket ? userc.basket : [])
    const { user } = useSelector((state) => ({ ...state }))
    useEffect(() => {
        console.log(user)
        if (userc) {
            userc.basket = basket
            userc = JSON.stringify(userc)
            localStorage.setItem('amazon-user', userc)
        }
    }, [basket])
    return (
        <div className='home'>
            <div className='homeContainer'>
                <img className='homeImage' src='https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg' />
            </div>
            <div className='homeRow'>
                <Product
                    basket={basket}
                    setBasket={setBasket}
                    id="25159166"
                    title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses "
                    price={29.99}
                    image="https://pictures.abebooks.com/isbn/9789043030984-us-300.jpg"
                    rating={5}
                />
                <Product
                    basket={basket}
                    setBasket={setBasket}
                    id="25159167"
                    title="Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver)"
                    price={200}
                    image="https://m.media-amazon.com/images/I/81FyYXoQF-L._SL1500_.jpg"
                    rating={4}
                />
            </div>
            <div className='homeRow'>
                <Product
                    basket={basket}
                    setBasket={setBasket}
                    id="25159168"
                    title="Amazon Brand - Symbol Men Sweatshirt"
                    image="https://m.media-amazon.com/images/I/71uPvh5jjsL._UL1500_.jpg"
                    price={10}
                    rating={2}
                />
                <Product
                    basket={basket}
                    setBasket={setBasket}
                    id="25159169"
                    title="iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1 | 120Hz Refresh Rate | 5000mAh Battery "
                    image="https://m.media-amazon.com/images/I/61VbKHdE0rL._SL1200_.jpg"
                    price={215.99}
                    rating={3}
                />
                <Product
                    basket={basket}
                    setBasket={setBasket}
                    id="25159170"
                    title="Nivia Storm Football - Size 5"
                    image="https://m.media-amazon.com/images/I/61RpRYFb2wL._SL1100_.jpg"
                    price={10}
                    rating={5}
                />
            </div>
            <div className='homeRow'>
                <Product
                    basket={basket}
                    setBasket={setBasket}
                    id="25159171"
                    title="Logitech G213 Prodigy Gaming Keyboard, LIGHTSYNC RGB Backlit Keys, Spill-Resistant, Customizable Keys, Dedicated Multi-Media Keys - Black"
                    image="https://m.media-amazon.com/images/I/61Nt8geXzWL._SL1500_.jpg"
                    price={20}
                    rating={4}
                />
            </div>
        </div>

    )
}

export default Home