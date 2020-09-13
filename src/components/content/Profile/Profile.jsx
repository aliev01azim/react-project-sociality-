import React from 'react';
import s from './Profile.module.css';
import ActivePost from './ActivePost/ActivePost.jsx';
import Description from './Description/Description.jsx'; 
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ActivePost profile={props.profile}/>
            <Description profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}


export default Profile;