import React, {useState} from 'react';
import './NavBar.css'
import {Link, NavLink} from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa'
import Logo from '../../Images/Logo.svg'
import { navItems } from './NavItems'
import Button from '../Button';


const NavBar = () => {

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

    const closeMobileMenu = () => setHamburgerMenuOpen(false)

    const handleClick = () => setHamburgerMenuOpen(!hamburgerMenuOpen)

  return (
    <header>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to='/#home' className='navbar-logo' onClick={closeMobileMenu}>
                    <div className='logo-container'>
                    <img src={Logo} className='logo-image' alt="queens of pain logo"/>
                    </div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {hamburgerMenuOpen ? <FaTimes/> : <FaBars />}
                </div>


                <ul className={hamburgerMenuOpen ? "nav-menu active" : "nav-menu"}>
                {navItems.map((item) => {
                    return (
                    <li key={item.id} className={item.className}>
                        <NavLink to={item.path} className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                            {item.title}
                        </NavLink>
                    </li>
                    )
                })}
                <li><a className='instagram-icon' href="https://www.instagram.com/queens.of.pain.cc/"><FaInstagram/></a></li>
                </ul>

            </div>
        </nav>
    </header>
  )
}

export default NavBar