import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow,buttonToggleIsFetching, getAllUsers,onUsersPageChanged } from '../../../redux/users-reducer';
import  Preloader  from '../../../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getAllUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged=(pageNumber)=>{
       this.props.onUsersPageChanged(pageNumber,this.props.pageSize)
    }

    render() {
        return <>
        {this.props.isFetching?
         <Preloader/> : null}
        <Users pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        Users={this.props.Users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalUserCount={this.props.totalUserCount}
        buttonToggleIsFetching={this.props.buttonToggleIsFetching}
        btnToggle={this.props.btnToggle}
        />
    </>
    }
}

let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUserCount,
        currentPage:state.UsersPage.currentPage,
        btnToggle:state.UsersPage.btnToggle,
        isFetching:state.UsersPage.isFetching,
    }
}



export default compose(
    connect(mapStateToProps, {follow, unfollow,buttonToggleIsFetching,getAllUsers,onUsersPageChanged}),
    withAuthRedirect
)(UsersContainer)

