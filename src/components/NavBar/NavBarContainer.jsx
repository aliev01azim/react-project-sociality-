import React from 'react';
import s from './NavBar.module.css';
import NavBar from './NavBar'
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps=(state)=>{
    return{
        NavBarPage:state.NavBarPage,
        FriendsData:state.NavBarPage.FriendsData
    }
}
export default compose(
    connect(mapStateToProps)
)(NavBar)