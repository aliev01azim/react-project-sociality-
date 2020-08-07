import React from 'react';
import s from './Text.module.css';

const Text = (props) => {
    return (
        <div>
            <div className={s.me}>
                <img src="https://img.favpng.com/1/12/2/smiley-emoticon-png-favpng-2CL3nzjmcSjgdC7vmyFwrUTq9_t.jpg" />
            Me
            </div>
            <div className={s.text}>

                {props.text}
            </div>
        </div>

    )
}
export default Text;