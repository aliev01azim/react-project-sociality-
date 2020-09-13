import React from 'react';
import { addPost, onPostChange } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';


let mapStateToProps=(state)=>{
    return{
        PostsData:state.profilePage.PostsData,
        newPostText:state.profilePage.newPostText,
    }
}


let MyPostsContainer=connect(mapStateToProps,{onPostChange,addPost})(MyPosts)
export default MyPostsContainer