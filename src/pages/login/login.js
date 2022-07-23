import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

function LoginForm() {
  const [values, setValues] = useState({
    email: 'mord@gmail.com',
    pwd: 'test123',
    emailError: '',
    pwdError: '',
    loading: false,
    redirectToReferer: false,
  })

  const navigate = useNavigate()

  const [status, setStatus] = useState(false)

  const { email, pwd, emailError, pwdError, redirectToReferer } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  function submit(e) {
    e.preventDefault()
    setValues({ ...values, emailError: '', pwdError: '' })
    const user = { email, password: pwd }
    navigate('/')
  }

  return (
    <div className='login-container'>
      <div className='login-forms'>
        <h3>Login</h3>
        <i className='fas fa-user-friends'></i>
        <form>
          <div className='login-password'>
            <input
              type='text'
              className='username'
              value={email}
              placeholder='Email'
              required
              onChange={handleChange('email')}
            />
          </div>
          <span className='error'>{emailError}</span>
          <div className='login-password'>
            <input
              type={status ? 'text' : 'password'}
              placeholder='password'
              value={pwd}
              required
              onChange={handleChange('pwd')}
            />
            {status ? (
              <i className='fas fa-eye' onClick={() => setStatus(!status)}></i>
            ) : (
              <i
                className='fas fa-eye-slash'
                onClick={() => setStatus(!status)}
              ></i>
            )}
          </div>
          <span className='error'>{pwdError}</span>

          <button className=' loginBtn' onClick={submit}>
            Login
          </button>
          {/* end of login button */}

          {pwdError && (
            <div className='signup'>
              Forgotten password
              <button
                className='Lgsignup'
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Reset
              </button>
            </div>
          )}
          {/* forgotten password change password. */}

          <div className='social-btns'>
            <button
              className='fb soc'
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <i className='fab fa-facebook-square'></i>{' '}
              <span className='fb-text'>facebook</span>
            </button>
            <button
              className='goog soc'
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <i className='fab fa-google-plus-g'></i>
              <span className='go-text'>Google</span>
            </button>
          </div>
          <div className='signup'>
            Dont have an account{' '}
            <Link to='/signup'>
              <button className='Lgsignup'>Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
