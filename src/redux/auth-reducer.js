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

export default authReducer;