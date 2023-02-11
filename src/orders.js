import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Order from './Order';
import "./orders.css"
function Orders() {
    const { user } = useSelector((state) => ({ ...state }))
    const [orders, setOrders] = useState([]);
    const params = useParams()
    useEffect(() => {
        if (user) {
            console.log(user)
            const getOrders = async () => {
                console.log(user.email)
                const email = user.email
                const res = await axios.post(`http://localhost:5000/api/orders`, user)
                setOrders(res.data)

            }
            getOrders()
            //onSnapshot puts everything it into an array snapshot.docs
            // db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => {
            //     // console.log(snapshot.docs[0].data())
            //     setOrders(snapshot.docs.map(order => ({
            //         id: order.id,
            //         data: order.data()
            //     })))
            // })
        }
        else {
            alert('sign in')
        }
    }, [user])

    if (orders != []) {
        // console.log(orders[0]?.data.basket)
        return (
            <div className='orders'>
                <h1>Your Orders</h1>
                <div className='ordersContainer'>

                    {orders?.map((order, i) => (
                        <div className='orderr' key={i} ><Order order={order} /></div>
                    ))}
                </div>
            </div>
        )
    }
    else {
        return (<h1>Nothing</h1>)
    }
}

export default Orders