import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
function Navbar({isLoggedIn}) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className='navbar'>
                <Link to={'/'}
                    className='navbarLogo'>2ndBooks</Link>
                <div className="navbarPC navbarLinks">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>Search</Link>
                    <Link to={'/'}>About Us</Link>
                </div>
                <div className='navbarActions'> {
                    isLoggedIn === true && (
                        <Link to={'/'}
                            className='navbarPC navbarLogin text-white'>
                            <span className='material-symbols-outlined'>shopping_cart</span>
                        </Link>
                    )
                }
                    {
                    isLoggedIn === true && (
                        <Link to={'/'}
                            className='navbarPC navbarLogin text-white'>
                            <span className='material-symbols-outlined'>person</span>
                        </Link>
                    )
                }
                    {
                    isLoggedIn ? (
                        <Link to={'/'}
                            className='navbarPC navbarLogin text-white'>Logout</Link>
                    ) : (
                        <Link to={'/'}
                            className='navbarPC navbarLogin text-white'>Login / Signup</Link>
                    )
                } </div>
                <span className='navbarMobile material-symbols-outlined text-bold'
                    onClick={
                        () => {
                            setShowMenu(!showMenu)
                        }
                }>menu</span>
            </div>
            {
            showMenu === true && (
                <div className="navbarMobileMenu  navbarMobilesLinks">
                    {
                    isLoggedIn === true && (
                        <Link to={'/'}>
                            <span className='material-symbols-outlined'>shopping_cart</span>
                        </Link>
                    )
                }
                    {
                    isLoggedIn === true && (
                        <Link to={'/'}>
                            <span className='material-symbols-outlined'>person</span>
                        </Link>
                    )
                }
                    {
                    isLoggedIn ? (
                        <Link to={'/'}>Logout</Link>
                    ) : (
                        <Link to={'/'}
                            >Login / Signup</Link>
                    )
                }
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>Search</Link>
                    <Link to={'/'}>About Us</Link>
                </div>
            )
        } </>
    )
}

export default Navbar
