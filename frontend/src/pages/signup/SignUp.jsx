import React from 'react'
import "./signup.scss"

const SignUp = () => {
  return (
    <div className='signup'>
    <form>
      <h1 className='signup_form'>Sign In</h1>
      <input type="email" placeholder='Email address' />
      <input type="password" placeholder='password' />
      <button type='submit'>Sign Up</button>
    </form>
    </div>
  )
}

export default SignUp