import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from 'axios'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
function Login() {
    const dispatch = useDispatch()
    const history = useNavigate();
    const signIn = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/login', {
                email, password
            })
            if (res.data.status === true) {
                localStorage.setItem('amazon-user', JSON.stringify(res.data.userC))
                dispatch({
                    type: "LOGIN",
                    payload: res.data.userC, basket: []
                })
                history('/')
            }
            toast(res.data.msg)
        } catch (err) {
            console.log(err)
            toast(err)
        }
    }
    const register = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/register', {
                email, password
            })
            // console.log(res)
            if (res.data.status === true) {
                localStorage.setItem('amazon-user', JSON.stringify(res.data.user))
                history('/')
            }
            toast(res.data.msg)
        } catch (err) {
            console.log(err)
            toast(err)
        }
    }
    const [email, setEmail] = useState('divianshu1@gmail.com');
    const [password, setPassword] = useState('12345678');
    return (
        <div className='login'>
            <Link to="/">
                <img className='loginLogo' src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Logo-Download-Free-PNG.png" alt='Amazon Logo' />
            </Link>
            <div className='loginContainer'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => {
                        setEmail(e.target.value)
                    }} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => {
                        setPassword(e.target.value)
                    }} />
                    <button className='signINButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing in agree to AMAZON FAKE CLONE conditions
                </p>
                <button className='signUPButton' onClick={register}>Create Your Account</button>
            </div>
        </div>

    )
}

export default Login