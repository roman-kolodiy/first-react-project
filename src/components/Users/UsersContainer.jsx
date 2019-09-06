import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import UsersClass from "./UsersClass";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userID) => {
            dispatch(followAC(userID))
        },
        unfollowUser: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (usersList) => {
            dispatch(setUsersAC(usersList))
        }


    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;