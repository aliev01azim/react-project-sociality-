import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getOurProfile } from '../../../redux/profile-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
         let userId=this.props.match.params.userId
         if(!userId){
             userId=2
         }
         this.props.getOurProfile(userId)
      
    }

    render() {
        return (
        <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps=(state)=>{
    return{
        profile:state.profilePage.profile,
    }
}


export default compose(
    connect(mapStateToProps,{getOurProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
