import React from 'react';
import s from './Message.module.css';
import Text from './Text/Text';




const Message = (props)=>{
    
    
    let MessageElements=props.MessageData.map(mes=><Text id={mes.id} text={mes.text}/>)
    
    
    return(
        <div className={s.message}>
                {MessageElements}
        </div>
    )
}
export default Message;