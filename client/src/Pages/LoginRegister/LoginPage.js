import React from 'react'
import Login from '../../Components/Forms/Login'
import './Loginpage.css'
function LoginPage({isLoggedIn=false}) {
  return (
    <div className='loginPageContainer'>
      <Login />
    </div>
  )
}

export default LoginPage
