import React from 'react';
import Posts from '../Posts/Posts';
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    
    let PostElements = props.PostsData.map(post=> <Posts likesCount={post.id} postsDesc={post.postsDesc} />)

    let newPostElement=React.createRef();
    let addPost=()=>{
        props.addPost()
    }
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        props.onPostChange(text)
    }
    return (
        <div className={s.myPosts}>
            <textarea
                ref={newPostElement}
                onChange={onPostChange}
                value={props.newPostText} />
            <button onClick={addPost}>Add Post</button>
            {PostElements}
        </div>
    )
}


export default MyPosts;