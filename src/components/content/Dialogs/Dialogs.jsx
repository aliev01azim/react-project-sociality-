import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {


    let DialogsElements=props.DialogsData.map(dialog=><Dialog id={dialog.id} name={dialog.name} />)


    return (
        <div className={s.dialogs}>
            <div className={s.left}>
                <h2>Dialogs</h2>
                {DialogsElements}
            </div>
            <div className={s.right}>
                <Message MessageData={props.MessageData}/>
            </div>
        </div>
    )
}
export default Dialogs;