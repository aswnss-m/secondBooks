import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import "./Form.css"
function Login({isRegister}) {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault()

    axios.post('http://localhost:5000/login',{username,password}).then(res=>{
      console.log(res.status);
      if(res.status === 401){
        alert('Invalid username or password')
      }else if(res.status === 200){
        localStorage.setItem('token',res.data)
        localStorage.setItem("user",JSON.stringify(res.data.details))
        window.location.reload()
      }
      else{
        alert('Something went wrong')
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className='loginContainer'>
      <form action="/" method="post" className='form' onSubmit={handleSubmit}>
        <span className=" circle"></span> 
        <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='username' onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
        </div>
        <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='password' onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
        </div>
        <div className="formGroup formButtonGroup">
            <input type="submit" value="Login" />
            <input type="reset" value="Clear" />
        </div>
        <p>Forgot Password? <Link to={'/login'}>click here</Link></p>
        <p>Dont have an account? <Link to={'/login'} onClick={isRegister}>create an account</Link></p>
      </form>
    </div>
  )
}

export default Login
