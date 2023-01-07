import React, {useState} from 'react'
import { subMenuItems } from './NavItems'

const Dropdown = () => {

    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    return (
    <ul className={dropdownVisibility ? 'dropdown-ul hidden' : 'dropdown-ul'} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
        {subMenuItems.map((item) => {
            return (
                <li key={item.id}>
                    <a href={item.path} 
                            className={item.className}
                            onClick={() => setDropdownVisibility(!dropdownVisibility)}>{item.title}</a>
                </li>
            )
        })}
    </ul>
    )
}

export default Dropdown