import React from 'react'
import Logo from '../Images/Logo.svg'
import {FaInstagram} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <nav>
          <a href="#home">
            <div className='logo-div'>
              <img src={Logo} className='logo-image'/>
            </div>
          </a>

          <ul>
              <li><a href="#whoweare" className='navlistitems'>Who We Are</a></li>
              <li><a href="#whatwedo" className='navlistitems'>What We Do</a></li>
              <li><a href="#principles" className='navlistitems'>Ethos</a></li>
              <li><a href="/" className='navlistitems'>FAQs</a></li>
              <li><a href="/" className='navlistitems'>Donate</a></li>
              <li><a href="https://www.instagram.com/queens.of.pain.cc/" className='navlistitems'><FaInstagram size={25} className='icon'/></a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header