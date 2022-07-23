import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()
  console.log(id)
  return <div>Product {id}</div>
}

export default Product
