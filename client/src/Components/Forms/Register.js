import React from 'react'
import { Link } from 'react-router-dom'
import "./Form.css"
import { useState } from 'react'
function Register({isLogin}) {
    const [isVerify,setIsVerify] = useState(false)
  return (
    <div className='loginContainer'>
      <form action="/" method="post" className='form'>
        {/* <span className=" circle"></span>  */}
        <span className='text-bold' style={{textAlign:'center'}}>Register</span>
        <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='Confirm Password'/>
        </div>
        <div className="formGroup">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" placeholder='email' />
        </div>
        <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='username' />
        </div>
        <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='password'/>
        </div>
        <div className="formGroup">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="password" id="password" placeholder='Confirm Password'/>
        </div>
        <div className="formGroup">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="number" inputMode='tel' name="mobile" id="mobile" placeholder='Mobile Number'/>
        </div>
        <div className="formGroup">
            <label htmlFor="mobile">Otp</label>
            <input type="number" inputMode='tel' name="Otp" id="Otp" placeholder='Otp Number'/>
        </div>
   
        <div className="formGroup formButtonGroup">
            <input type="submit" value="Register" />
            <input type="reset" value="Clear" />
        </div>
        <p>Already have an account? <Link to={'/login'} onClick={isLogin}>click here to login</Link></p>
      </form>
    </div>
  )
}

export default Register
