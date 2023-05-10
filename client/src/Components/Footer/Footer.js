import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
      <div className="footerLogo text-bold">
        2ndBooks
      </div>
      <div className="footerGetInTouch">
        <h5>Connect With Us</h5>
        <span className='material-symbols-outlined'>clock_loader_20</span>
        <span className='material-symbols-outlined'>clock_loader_20</span>
        <span className='material-symbols-outlined'>clock_loader_20</span>
      </div>
      <div className="footerLinks">
        <h5>Quick Links</h5>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Search</Link>
        <Link to={'/'}>About Us</Link>
      </div>
    </div>
  )
}

export default Footer
