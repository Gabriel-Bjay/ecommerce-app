import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>   
      <div>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0947d102336539.5f341d2eb6ca2.jpg'
         alt='urban-livin Logo' 
         className='login-logo'/>
      </div>
      <div className='login-container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text'/>
          <h5>Password</h5>
          <input type='Password' />
          <button type='submit' className='login-signInButton'>Submit</button>
        </form>
        <p>By Signing-in you agree to the urban livin' conditions of use and sale.Please see our privacy notice.</p>
        <button className='login-registerButton'>Create your account</button>
      </div>      
    </div> 
  )
}

export default Login
