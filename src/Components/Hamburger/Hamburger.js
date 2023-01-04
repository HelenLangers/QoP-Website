import React from 'react'
import {FaBars} from 'react-icons/fa'

const Hamburger = () => {
  return (
    <>
        <a href="#" className='toggle-button'>
            <FaBars className='bar'/>
        </a>
    </>
  )
}

export default Hamburger