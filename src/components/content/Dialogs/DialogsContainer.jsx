import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';


let mapStateToProps=(state)=>{
    return{
        DialogsData: state.DialogPage.DialogsData,
        newMessageText: state.DialogPage.newMessageText,
        MessageData: state.DialogPage.MessageData
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addMessage:()=>{
            dispatch(addMessageActionCreator())
        },
        onMessageChange:(text)=>{
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs) 