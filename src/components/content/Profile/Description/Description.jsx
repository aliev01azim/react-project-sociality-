import React from 'react';
import s from './Description.module.css';

const Description = (props) => {
    if(!props.profile){
        return <>
            <h1>azim will not gives up never in Shaa Allah!</h1>
        </>
    }
    return (
        <div className={s.description}>
            <description>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.contacts.facebook}
                </div>
                <div>
                    {props.profile.contacts.vk}
                </div>
                <div>
                    {props.profile.contacts.twitter}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.lookingForAJob
                    ?<h1>Very need working!</h1>
                    :<h1>Working on somebody for not genius!</h1>}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </description>
        </div>
    )
}
export default Description;