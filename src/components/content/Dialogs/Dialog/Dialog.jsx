import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props)=>{
    return(
        <div className={s.dialog}>
            <div className={s.ava}>
                
            </div>
            <li>
            <a href = {"/Dialogs/" + props.id} >
                {props.name}
            </a>
            </li>
        </div>
    )
}
export default Dialog;