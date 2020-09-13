import React from 'react';
import s from './ActivePost.module.css';
import Preloader from '../../../../common/preloader/Preloader'

const ActivePost = (props) => {
    if(!props.profile){
        return <>
            <Preloader />
        </>
    }
    return (
       <img src={props.profile.photos.large} />
    )
}
export default ActivePost;