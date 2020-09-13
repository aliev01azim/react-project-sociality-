import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props)=>{
    return(
        <div className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5BteBCLQmD0P165wX1dh_cBEf6wd4vLBFTw&usqp=CAU" />
            <div className={s.login}>
                {props.isAuth? props.login :
                <NavLink to={'/login'}>
                    Login
                </NavLink> }
            </div>
        </div>
    )
}
export default Header;