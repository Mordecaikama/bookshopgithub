import React, { useState, useContext } from 'react'
import { Context } from '../../Context'
import './input.css'

function Input({ pd, add }) {
  const { cartItems } = useContext(Context)
  const [val, setVal] = useState(pd && pd.count)
  const inner = cartItems && cartItems.filter((cartite) => cartite.id === pd.id)
  // console.log(inner)

  function increment(item) {
    setVal((prevCount) => prevCount + 1)
    add(item, 1)
  }

  function decrement(item) {
    if (val > 1) {
      setVal((prevCount) => (prevCount -= 1))
      add(item, -1)
    } else {
      return 1
    }
  }

  return (
    <div className='input'>
      {inner.length > 0 && (
        <>
          <div className='sub' onClick={() => decrement(pd)}>
            <i className='fas fa-minus'></i>
          </div>

          <input
            type='number'
            className='inputcomponent'
            value={val}
            onChange={() => {}}
          />

          <div className='add' onClick={() => increment(pd)}>
            <i className='fas fa-plus'></i>
          </div>
        </>
      )}
    </div>
  )
}

export default Input
