import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context'

function Product() {
  const { id } = useParams()
  const { mydata } = useContext(Context)
  const prod = mydata && mydata.filter((cartitem) => cartitem.id == id)
  console.log(prod)
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Products page</h1>
      {prod &&
        prod.map((item, ind) => {
          return (
            <div className='single-container' key={ind}>
              <h3>{item.title}</h3>
              <div className='single-img'>
                <img src={item.url} alt={item.title} />
              </div>
              <p>{item.price}</p>
              <p>{item.title}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Product
