import React from 'react'
import Profile from "./Profile";
import {getProfileData} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount () {
        this.props.getProfileData(this.props.match.params.userId)
    }
    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {getProfileData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
