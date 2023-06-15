import React, { useState } from 'react'
import "./Login.css"
import {auth} from "../../firebase"
import {  useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          navigate('/');
        })
        .catch((error) => {
          alert('Please provide a valid email and password.');
        });
    } else {
      alert('Please provide a valid email and password.');
    }
  };
  
  
  const register = (e) => {
    e.preventDefault();
    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            navigate('/');
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert('Please provide a valid email and password.');
    }
  };
  


  return (
    <div className='login'>   
      <div>
        <Link to='/'>
          <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0947d102336539.5f341d2eb6ca2.jpg'
            alt='urban-livin Logo' 
            className='login-logo'/>
        </Link>
      </div>
      <div className='login-container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='email' 
          value={email}
          onChange={(e) =>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='Password' 
          value={password}
          onChange={(e) =>setPassword(e.target.value) }/>

          <button type='submit' className='login-signInButton' onClick={signIn}>Log In</button>
        </form>
        <p>By Signing-in you agree to the urban livin' conditions of use and sale.Please see our privacy notice.</p>
        <button className='login-registerButton' onClick={register}>Create your account</button>
      </div>      
    </div> 
  )
}

export default Login
