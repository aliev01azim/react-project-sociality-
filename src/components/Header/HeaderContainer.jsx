import React from 'react';
import Header from './Header';
import {setUserData, getAuthorizing} from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

class HeaderContainer  extends React.Component{
    componentDidMount() {
        this.props.getAuthorizing()
   }
   

    render(){
         return <Header {...this.props}/>
    }
}
let mapStateToProps=(state)=>{
    return{
        isAuth:state.Authorizing.isAuth,
        login:state.Authorizing.login
    }
    
}
export default compose(
    connect(mapStateToProps,{setUserData,getAuthorizing})
)(HeaderContainer)