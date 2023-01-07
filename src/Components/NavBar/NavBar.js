import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import HamburgerMenu from '../Hamburger/Hamburger'
import Logo from '../../Images/Logo.svg'
import { navItemsNoRouter, navItemsRouterLink} from './NavItems'
import Dropdown from './Dropdown'
import {FaCaretDown} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const NavBar = () => {

  const [dropdown, setDropdown] = useState(false);



  return (
    <header>
        <nav>
          <a href="#home">
            <div className='logo-div'>
              <img src={Logo} className='logo-image' alt="queens of pain logo"/>
            </div>
          </a>

          <HamburgerMenu />

          <ul className='top-nav-ul'>
          {/* about dropdown*/}
            <li className='listItem'
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
              <a className='topnav-list-items'>
                About<FaCaretDown/>
              </a>
              {dropdown && <Dropdown/>}
            </li> 

            {/* for links going to another internal page */}
            {navItemsRouterLink.map((item) => {
              return (
                <li className='listItem' key={item.id} >
                  <Link to={item.path} className={item.className}>{item.title}</Link>
                </li>
              )
            })}

            {/* for links going externally */}
              {/* Instagram */}
              <li className='listItem'><a href="https://www.instagram.com/queens.of.pain.cc/" className='instagram-icon'><FaInstagram /></a></li>
          </ul>
        </nav>
        
    </header>
  )
}

export default NavBar