import React from 'react'
import '../Footer/Footer.css'
import Logo from '../../Assets/SVGs/Logo.svg'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='left-column'>
          <h3 className='title'>Queens of Pain CC</h3>
          <div className='logo-container'>
            <img src={Logo} alt="queens of pain logo"/>
          </div>
          
          <p className='footer-text'>A women-led Edinburgh <br/>cycling community</p>
          <p className='footer-text'>Name used with permission by Rapha</p>
        </div>

        <hr className='footer-break'/>

        <div className='center-column'>
          <h3 className='title'>Site Links</h3>
          <p className='footer-text'><a href="/about" className='link'>About QoP</a></p>
          <p className='footer-text'><a href="/faqs" className='link'>FAQs</a></p>
          <p className='footer-text'><a href="/events" className='link'>Events</a></p>
          <p className='footer-text'><a href="/login" className='link'>Login</a></p>
        </div>

        <hr className='footer-break'/>

        <div className='right-column'>
          <h3 className='title'>Contact</h3>
          <p className='footer-text'>Drop us a message on Instagram</p>
          <a className='instagram-icon-footer' href="https://www.instagram.com/queens.of.pain.cc/"><FaInstagram/></a>
        </div>
    </footer>
  )
}

export default Footer