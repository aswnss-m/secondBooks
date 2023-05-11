import React from 'react'
import { Link } from 'react-router-dom'
import "./Form.css"
function Login() {
  return (
    <div className='loginContainer'>
      <form action="/" method="post" className='form'>
        <span className=" circle"></span> 
        <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='username' />
        </div>
        <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='password'/>
        </div>
        <div className="formGroup formButtonGroup">
            <input type="submit" value="Login" />
            <input type="reset" value="Clear" />
        </div>
        <p>Forgot Password? <Link to={'/login'}>click here</Link></p>
        <p>Dont have an account? <Link to={'/login'}>create an account</Link></p>
      </form>
    </div>
  )
}

export default Login
