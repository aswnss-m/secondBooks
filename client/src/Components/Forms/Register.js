  import React from 'react'
  import { Link } from 'react-router-dom'
  import "./Form.css"
  import { useState } from 'react'
  function Register({isLogin}) {
      const [formData, setFormData] = useState({
          name: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
          mobile: '',
          otp: '',
        });
        
        const [error, setError] = useState('');
      const handleSubmit = async (event) => {
          event.preventDefault();
          setError('');
        
          const { name, email, username, password, confirmPassword, mobile, otp } = formData;
        
          // Check if password and confirm password match
          if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match.');
            return;
          }
        
          try {
            const response = await fetch('http://localhost:5000/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                username,
                password,
                mobile,
                otp,
              }),
            });
        
            if (response.ok) {
              // Registration successful, handle the response accordingly
              // e.g., show a success message or redirect to login page
            } else {
              // Registration failed, handle the error response
              const errorData = await response.json();
              setError(errorData.message);
            }
          } catch (error) {
            setError('An error occurred. Please try again.');
            console.error(error);
          }
        };
        
      // const [isVerify,setIsVerify] = useState(false)
    return (
      <div className='loginContainer'>
        <form action="/" method="post" className='form' onSubmit={handleSubmit}>
          <span className='text-bold' style={{textAlign:'center'}}>Register</span>
          <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder='Name'/>
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
