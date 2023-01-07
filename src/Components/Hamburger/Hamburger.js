import React, {useState} from 'react'
import { Twirl as Hamburger} from 'hamburger-react'

const HamburgerMenu = () => {

    const [showHamburger, setShowHamburger] = useState(false)

    const toggleMenu = () => setShowHamburger((current) => !current)

    return (
    <div className={showHamburger ? 'hamburger-menu-icon hidden' : 'hamburger-menu-icon'}
        onClick={toggleMenu}>
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