import React from 'react'
import { Twirl as Hamburger} from 'hamburger-react'

const HamburgerMenu = () => {
  return (
    <div className='hamburger-menu-icon'>
        <a href="#">
            <Hamburger 
                label="Show menu"
                size={40}
                color="#fff"
                />
        </a>
    </div>
  )
}

export default HamburgerMenu