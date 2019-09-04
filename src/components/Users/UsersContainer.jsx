import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList
    }
};

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        followUser: (userID) => {
            debugger;
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;