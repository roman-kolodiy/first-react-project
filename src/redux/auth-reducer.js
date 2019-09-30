import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profileData: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                profileData: action.profileData,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, profileData) => ({type: SET_USER_DATE, data: {id, email, login}, profileData});

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.data.resultCode === 0) {
                    let {id, email, login} = data.data.data;
                    profileAPI.getProfile(id)
                        .then(data => {
                            dispatch(setAuthUserData(id, email, login, data.data));
                        })
                }
            })
    }
};

export default authReducer;