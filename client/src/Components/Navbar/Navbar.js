import React from 'react'
import {useState, useEffect} from 'react'
import {Link , useLocation} from 'react-router-dom'
import "./Navbar.css"
function Navbar({isLoggedIn}) {
    const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className='navbar'>
                <Link to={'/'}
                    className='navbarLogo'>2ndBooks</Link>
                <div className="navbarPC navbarLinks">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/search'}>Search</Link>
                    <Link to={'/#about'}>About Us</Link>
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
