import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='container'>
      <h1 className='brand'>
        <span>gh</span> Book Store
      </h1>
      <p>This is just a template form, Does not submits to anywhere</p>
      <div className='wrapper animated bounceInLeft'>
        <div className='company-info'>
          <h3>Book Store</h3>
          <ul>
            <li>
              <i className='fa fa-road'></i> 44 Something st
            </li>
            <li>
              <i className='fa fa-phone'></i> (555) 555-5555
            </li>
            <li>
              <i className='fa fa-envelope'></i> test@acme.test
            </li>
          </ul>
        </div>
        <div className='contact'>
          <h3>Email Us</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <p>
              <label>Name</label>
              <input type='text' name='name' />
            </p>
            <p>
              <label>Company</label>
              <input type='text' name='company' />
            </p>
            <p>
              <label>Email Address</label>
              <input type='email' name='email' />
            </p>
            <p>
              <label>Phone Number</label>
              <input type='text' name='phone' />
            </p>
            <p className='full'>
              <label>Message</label>
              <textarea name='message' rows='5'></textarea>
            </p>
            <p className='full'>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
