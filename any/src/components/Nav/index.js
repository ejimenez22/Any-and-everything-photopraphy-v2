import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

function Nav() {

    return (
        <Menu>
            <NavLink exact='true' to='/' className='menu-item'>
                <h3>Home</h3>
            </NavLink>
            <NavLink exact='true' to='/about' className='mnu-item'>
                <h3>About</h3>
            </NavLink>
            <NavLink exact='true' to='/contact' className='menu-item'>
                <h3>Contact</h3>
            </NavLink>
            <NavLink exact='true' to='/portfolio' className='menu-item'>
                <h3>Portfolio</h3>
             </NavLink>
        </Menu>
    )
}

export default Nav