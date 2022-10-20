import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

function Nav() {
    return (

        <Menu>
            <div className='menu-item'>
              <NavLink exact='true' to='/'>
                <button className="nav-btn">home</button>
              </NavLink>
            </div>
            <div className='menu-item'>
              <NavLink exact='true' to='/about'>
                <button className="nav-btn">about me</button>
              </NavLink>
            </div>
            <div className='menu-item'>
              <NavLink exact='true' to='/contact'>
                <button className="nav-btn">contact me</button> 
              </NavLink>
            </div>
            <div className='menu-item'>
              <NavLink exact='true' to='/portfolio'>
                <button className="nav-btn">portfolio</button>
              </NavLink>
            </div>
        </Menu>
        
    )
}

export default Nav