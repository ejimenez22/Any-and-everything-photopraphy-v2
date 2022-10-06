import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    return ( 
        <div className="nav-container">
            <div className="nav-links">
                <div className='menu-item'>
                    <NavLink exact='true' to='/'>
                        <h3>Home</h3>
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink exact='true' to='/about'>
                        <h3>About Me</h3>
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink exact='true' to='/contact'>
                        <h3>Contact Me</h3> 
                    </NavLink>
                </div>
                <div className='menu-item'>
                    <NavLink exact='true' to='/portfolio'>
                        <h3>Portfolio</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav