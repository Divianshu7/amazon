import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => ({ ...state }))
    console.log(user)
    const history = useNavigate()
    const handleAuth = () => {
        if (user) {
            dispatch({
                type: 'LOGOUT',
                payload: null
            })
            localStorage.removeItem('amazon-user')
            history('/')
        }
    }
    return (
        <div className='header'>
            <Link to="/"><img className='headerLogo' src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-Background-PNG-Image.png" width="200" alt="woodland gardening amazon png logo vector" />
            </Link>
            <div className='headerSearch'>
                <input className='headerSearchIn' type="text" />
                <SearchIcon className='headerSearchIcon' />
            </div>
            <div className='headerNav'>
                <div className='headerOption' onClick={handleAuth}>
                    <Link className='link' to={!user?.email && "/login"}>
                        <span className='headerOptionLineOne'>
                            {user?.email ? "Hello " + user.email : "Hello Guest"}
                        </span>
                        <span className='headerOptionLineTwo'>
                            {user?.email ? "Sign Out" : "Sign In"}
                        </span>
                    </Link>

                </div>
                <div className='headerOption'>
                    <Link to="/orders" className='link'>
                        <span className='headerOptionLineOne'>
                            Returns
                        </span>
                        <span className='headerOptionLineTwo'>
                            & Orders
                        </span>
                    </Link>
                </div>
                <div className='headerOption'>
                    <span className='headerOptionLineOne'>
                        Your
                    </span>
                    <span className='headerOptionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='headerBasket'>
                    <Link to="/checkout"><ShoppingBasketIcon className='headerBasketIcon' /><span className='headerBasketCount headerOptionLineTwo'>{user?.basket?.length}</span></Link>

                </div>
            </div>
        </div>

    )
}

export default Header;