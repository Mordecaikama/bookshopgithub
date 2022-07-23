import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartTable from './CartTable'

function Payment(img) {
  const { cartItems, cartTotalPrice } = useContext(Context)

  const items = cartItems.map((item) => {
    return (
      // <div key={item.id}>
      <CartTable img={item} key={item.id} />

      // </div>
    )
  })

  function details() {
    console.log('Thanks for working with us buy........')
  }

  return (
    <div className='table-class'>
      <table>
        <tr>
          <th>Delete</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {items}
        {cartItems.length < 1 ? (
          <div> Cart is empty</div>
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{cartTotalPrice}</td>
          </tr>
        )}
      </table>
      <button onClick={details}>pay</button>
    </div>
  )
}

export default Payment
