import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {


    let DialogsElements = props.DialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)

    let newMessageElement = React.createRef();
    let addMessage = () => {
           props.addMessage()
    }
    
    let onMessageChange=()=>{
        let text = newMessageElement.current.value;
        props.onMessageChange(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.left}>
                <h2>Dialogs</h2>
                {DialogsElements}
            </div>
            <div className={s.right}>
                <Message 
                MessageData={props.MessageData} />
                <textarea
                    ref={newMessageElement}
                    value={props.newMessageText}
                    onChange={onMessageChange}/>
                <button onClick={addMessage}>
                    Send Message
                </button>
            </div>
        </div>
    )
}
export default Dialogs;