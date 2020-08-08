import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.ava}>
                
            </div>
            <div className={s.friendsName}>
                {props.name}
            </div>
        </div>

    )
}


export default Friends;