import React, {useEffect} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../Cart/cartSlice'

function Navbar() {

  const {cart, cartQuantity} = useSelector((state) => state.cart)

  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getCartTotal())
  }, [cart])
  

  return (


    <div id='Navbar'>
        <h1>ShoeBazaar</h1>

        <div id="nav-items">
            <ul>
                <li><Link to='/home'><a>Home</a></Link></li>
                <li><Link to='signup'><a href='/signup'>SignUp</a></Link></li>
                <li><Link to='contact'><a>Contact</a></Link></li>
                <li><Link to='cart'><a>Cart</a></Link> <h>({cartQuantity})</h></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar