import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Header() {
  const { cartsize } = useContext(Context)
  // console.log(item_number)

  return (
    <div className='header'>
      <div className='logo'>
        {' '}
        Kents HOUSE <i className='fas fa-home'></i>{' '}
      </div>

      <div className='nav '>
        <ul>
          <Link to='/'>
            {' '}
            <li> Product </li>{' '}
          </Link>{' '}
          /<Link to='/bookshopgithub/account'> Account </Link> /
          <Link to='/bookshopgithub/contact'> Contact </Link> /
          <Link to='/bookshopgithub/payment' className='cart-head'>
            {' '}
            <i className='far fa-shopping-cart'></i>{' '}
            <small className='cart-number'> {cartsize} </small>{' '}
          </Link>
          / /
        </ul>
      </div>
    </div>
  )
}

export default Header
