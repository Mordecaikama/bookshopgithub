// const images = require('../images', true)
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
// import img from '../images/img3.jpg'

import Image from '../component/Image'

function Homepage() {
  const { allphotos, mydata } = useContext(Context)
  console.log(process.env.public)

  const item = mydata.map((prod, ind) => {
    // console.log(prod.url)
    return <Image mydata={prod} key={ind} />
  })

  return (
    <div className='product-container '>
      <div className='product jumbo'>
        <img src={require('../images/img3.jpg')} alt='bg' />
        <div className='info'>
          <h1> welcome to the Products page</h1>
          <div className='search-bar'>
            <input type='text' id='search-box' placeholder='search item' />
            <button>search </button>
          </div>
        </div>
      </div>

      <div className='row products'>{item}</div>
    </div>
  )
}

export default Homepage
