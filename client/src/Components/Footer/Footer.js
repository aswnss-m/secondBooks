import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
      <div className="footerLogo"></div>
      <div className="footerGetInTouch"></div>
      <div className="footerLinks">
        <h2>Quick Links</h2>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Search</Link>
        <Link to={'/'}>About Us</Link>
      </div>
    </div>
  )
}

export default Footer
