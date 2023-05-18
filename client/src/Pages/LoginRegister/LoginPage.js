import React, { useEffect, useReducer } from 'react'
import Login from '../../Components/Forms/Login'
import Register from '../../Components/Forms/Register'
import './Loginpage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function LoginPage({isLoggedIn}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn){
      navigate('/profile')
    }
  },[])
    const [isNew,setIsNew] = useState(false)
    const handleIsNew = () =>{
        setIsNew(!isNew)
    }
  return (
    <div className='loginPageContainer'>
      {isNew?(<Register isLogin={handleIsNew}/>):(<Login isRegister={handleIsNew}/>)}
    </div>
  )
}

export default LoginPage
