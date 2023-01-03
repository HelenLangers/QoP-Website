import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='logo'>Logo</div>

            <ul>
                <li><a href="#whoweare">Who We Are</a></li>
                <li><a href="#whatwedo">What We Do</a></li>
                <li><a href="#principles">Ethos</a></li>
                <li><a href="/">FAQs</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Donate</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header