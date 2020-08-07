import React from 'react';
import s from './Profile.module.css';
import ActivePost from './ActivePost/ActivePost.jsx';
import Description from './Description/Description.jsx';
import Posts from './Posts/Posts.jsx';

const Profile = (props) => {
    
    

    let PostElements = props.PostsData.map(post=> <Posts likesCount={post.id} postsDesc={post.postsDesc} />)

    return (
        
        <div className={s.profile}>
            <ActivePost />

            <Description desc="ava + description" />

            <div className={s.myPosts}>
                <textarea></textarea>
                <button>Add Post</button>
                {PostElements}
            </div>
        </div>
    )
}


export default Profile;