import React from 'react';
import s from './Description.module.css';

const Description = (props) => {
    return (
        <div className={s.description}>
            <description>{props.desc}</description>
        </div>
    )
}
export default Description;