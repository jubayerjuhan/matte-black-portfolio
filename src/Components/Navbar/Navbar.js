import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavmenuStyle, MobileMenu } from "./Navbar.style";

const Navbar = () => {
    const [mMenuActive, setMMenuActive] = useState(true)
    return (
        <>
            <MobileMenu onClick={() => setMMenuActive(!mMenuActive)}>
                <i class={mMenuActive ? "fas fa-times" : "fas fa-bars"}></i>
            </MobileMenu>

            <NavmenuStyle mMenuActive={mMenuActive}>
                <ul>
                    <li><NavLink to='/' exact>Home</NavLink></li>
                    <li><NavLink to='/project'>Projects</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>

                </ul>
            </NavmenuStyle>
        </>
    );
};

export default Navbar;