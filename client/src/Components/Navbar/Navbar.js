import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar({isLoggedIn = false}) {
  const [showMenu , setShowMenu] = useState(false);
  return (
    <>
    <div className='navbar'>
      <Link to={'/'} className='navbarLogo'>2ndBooks</Link>
      <div className="navbarPC navbarLinks">
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Search</Link>
        <Link to={'/'}>About Us</Link>
      </div>
      <Link to={'/'} className='navbarPC navbarLogin text-white'>Login</Link>
      <span className='navbarMobile material-symbols-outlined text-bold' onClick={()=>{setShowMenu(!showMenu)}}>menu</span>
    </div>
      {showMenu===true&&(<div className="navbarMobileMenu  navbarMobilesLinks">
        <Link to={'/'}>Login</Link>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Search</Link>
        <Link to={'/'}>About Us</Link>
      </div>)}
      </>
  )
}

export default Navbar
