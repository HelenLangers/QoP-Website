import React, {useState} from 'react'
import Hamburger from './Hamburger/Hamburger'
import Logo from '../Images/Logo.svg'
import {FaCaretDown} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <header>
        <nav>
          <a href="#home">
            <div className='logo-div'>
              <img src={Logo} className='logo-image'/>
            </div>
          </a>

          <Hamburger onClick={toggle} isOpen={isOpen}/>

          <ul className='top-nav-ul'>
              <li><a href="#" className='topnavlistitems'>About <FaCaretDown/></a>

                {/* dropdown section */}
                <ul className='dropdown-ul'>
                  <li><a href="#whoweare" className='dropdownnavlistitems'>Who We Are</a></li> 
                  <li><a href="#whatwedo" className='dropdownnavlistitems'>What We Do</a></li>
                  <li><a href="#ethos" className='dropdownnavlistitems'>Ethos</a></li>
                </ul>
              </li>

              {/* back to main menu */}
              <li><a href="/" className='topnavlistitems'>FAQs</a></li>
              <li><a href="/events" className='topnavlistitems'>Events</a></li>
              <li><a href="/" className='topnavlistitems'>Donate</a></li>
              <li><a href="https://www.instagram.com/queens.of.pain.cc/" className='instagram-icon'><FaInstagram /></a></li>
          </ul>
        </nav>
    </header>
  )
}

export default NavBar