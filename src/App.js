import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'

import Account from './pages/Account'
import Contact from './pages/contact/Contact'
import Homepage from './pages/homepage'
import Payment from './pages/Payment'
import './App.css'
import Product from './pages/product'

function App() {
  return (
    <div className='home-container'>
      <h1 style={{ textAlign: 'center' }}>
        {' '}
        welcome to the BookShop! DemoApp{' '}
      </h1>
      <Header />
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/payment' element={<Payment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
