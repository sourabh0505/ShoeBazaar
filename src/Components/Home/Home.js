import React, { useState } from 'react'
import './home.css'
import data from './productInfo.json'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../Cart/cartSlice';

function Home () {

  const cartItems = useSelector((state) => state.cart.items)

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className='home'>

      <div className="searchBar">
        <input placeholder='Search products here...' type="text" onChange={(e) => {setSearchTerm(e.target.value)}} />
      </div>

      <div className="shoeCards">
      {
        data.filter((cartItems) => {
          if(searchTerm == ''){
            return cartItems;
          }else if(cartItems.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return cartItems;
          }
        })
        .map((cartItems) => {
          return(
            <div className="cardData" key={cartItems.id}>
              <div className="cardImage">
              <img src={cartItems.image} alt="/" />
              </div>

              <div className="dataCardInfo">
              <h3>{cartItems.name}</h3>
              <h3 className='colourChange'>{cartItems.category}</h3>
              <h3 className='colourChange'>1 Colour</h3>
              <h3>${cartItems.price}</h3>
              </div>

              <div className="addToCartBtn">
                <button className='addToCart' onClick={() => dispatch(addToCart(cartItems))}>Add To Cart</button>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Home