import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

function Nav() {

    return (
        <>
        <div>
            <nav>
                <NavLink exact='true' to='/' className='navLink'>
                    <h3>Home</h3>
                </NavLink>
                <NavLink exact='true' to='/about' className='navLink'>
                    <h3>About</h3>
                </NavLink>
                <NavLink exact='true' to='/contact' className='navLink'>
                    <h3>Contact</h3>
                </NavLink>
                <NavLink exact='true' to='/portfolio' className='navLink'>
                    <h3>Portfolio</h3>
                </NavLink>
            </nav>
        </div>
        </>
    )
}

export default Nav