import React, { useContext } from 'react'
import Input from '../component/inputqty/input'
import { Context } from '../Context'

function CartTable({ img }) {
  const url = `.${img.url}`
  const { removeFromCart, addToCart } = useContext(Context)

  return (
    <tr key={img.id}>
      <td>
        <i
          className='fal fa-times-circle'
          onClick={() => removeFromCart(img.id)}
        ></i>
      </td>
      <td>{img.title}</td>
      <td>
        <Input pd={img} add={addToCart} />
      </td>
      <td>{img.price}</td>
      <td>{img.price * img.qty}</td>
    </tr>
  )
}

export default CartTable
