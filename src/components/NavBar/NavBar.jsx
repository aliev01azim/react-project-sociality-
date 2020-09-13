import React from 'react';
import s from './NavBar.module.css';
import Friends from './friend/Friends';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {


    let FriendsElements=props.FriendsData.map(friend=><Friends id={friend.id} name={friend.name} />)
    

    return (
        <div className={s.navBar}>
            <li><NavLink to = '/Profile'>Profile</NavLink></li>
            <li><NavLink to = '/Dialogs'>Dialogs</NavLink></li>
            <li><NavLink to = '/News'>News</NavLink></li>
            <li><NavLink to = '/Music'>Music</NavLink></li>
            <li><NavLink to = '/Settings'>Settings</NavLink></li>
            <li><NavLink to = '/Users'>Users</NavLink></li>
            {FriendsElements}
        </div>

    )
}


export default NavBar;