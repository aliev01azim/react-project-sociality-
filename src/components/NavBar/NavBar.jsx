import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <li><NavLink to = '/Profile'>Profile</NavLink></li>
            <li><NavLink to = '/Dialogs'>Dialogs</NavLink></li>
            <li><NavLink to = '/News'>News</NavLink></li>
            <li><NavLink to = '/Music'>Music</NavLink></li>
            <li><NavLink to = '/Settings'>Settings</NavLink></li>
        </div>

    )
}


export default NavBar;