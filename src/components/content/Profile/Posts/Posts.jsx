import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div>
                <img src="https://generated.photos/vue-static/home/hero/6.png" />
            </div>
            <div>
                <div>
                    {props.postsDesc}
                </div>
                <div>
                   like {props.likesCount}
                </div>
            </div>
        </div>
    )
}
export default Posts;