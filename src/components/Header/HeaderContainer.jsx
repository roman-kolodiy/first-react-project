import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI, profileAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    profileAPI.getProfile(id)
                        .then(data => {
                            this.props.setAuthUserData(id, email, login, data);
                        })
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profileData: state.auth.profileData
});


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);