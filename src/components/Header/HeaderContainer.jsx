import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(response => {
                            let profileData = response.data;
                            this.props.setAuthUserData(id, email, login, profileData);
                        })
                }
            })
    }

    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profileData: state.auth.profileData
});


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);