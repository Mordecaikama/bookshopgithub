import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

// <h3 id="text">{mydata.title}</h3>

function Image({ mydata }) {
  const [hovered, setHovered] = useState(false)
  const { toggleFavorite, cartItems, addToCart, removeFromCart } =
    useContext(Context)
  // const favIcon = hovered && <i className="far fa-plus-circle"></i>
  // <i className="far fa-shopping-cart"></i>

  function ans() {
    if (mydata.isfavorite) {
      return <i className='fas fa-heart'></i>
    } else if (hovered) {
      return (
        <i
          className='far fa-heart'
          onClick={() => toggleFavorite(mydata.id)}
        ></i>
      )
      // return <i className="far fa-heart" onClick={()=> addToCart(mydata)}></i>
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === mydata.id)

    if (alreadyInCart) {
      return (
        <i
          className='fas fa-shopping-cart'
          onClick={() => removeFromCart(mydata.id)}
        ></i>
      )
    } else if (hovered) {
      return (
        <i className='far fa-plus-circle' onClick={() => addToCart(mydata)}></i>
      )
    }
  }

  return (
    <div
      className={`column ${ans}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={mydata.url} />
      {ans()}
      {cartIcon()}
      <Link to={`/product/${mydata.id}`}>
        <h3 id='text'>{mydata.title}</h3>
      </Link>
    </div>
  )
}

export default Image
