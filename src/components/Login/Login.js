import React from 'react'
import { useState } from 'react'
import "./Login.css"
import {auth} from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const signIn = (e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email, password)
        .then(()=>{
          navigate('/')
        }).catch((error)=>{
          console.log(error);
      })
  }
  const signUp = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email, password)
      .then(()=>{
        navigate('/')
      }).catch((error)=>{
        console.log(error);
    })
}


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
          <input type='email' 
          value={email}
          onChange={(e) =>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='Password' 
          value={password}
          onChange={(e) =>setPassword(e.target.value) }/>

          <button type='submit' className='login-signInButton' onClick={signIn}>Submit</button>
        </form>
        <p>By Signing-in you agree to the urban livin' conditions of use and sale.Please see our privacy notice.</p>
        <button className='login-registerButton' onClick={signUp}>Create your account</button>
      </div>      
    </div> 
  )
}

export default Login
