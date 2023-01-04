import React from 'react'
import Logo from '../Images/Logo.svg'

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
              <li><a href="/" className='navlistitems'>Contact</a></li>
              <li><a href="/" className='navlistitems'>Donate</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header