import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId ? this.props.match.params.userId : '2'}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(WithURLDataContainerComponent);