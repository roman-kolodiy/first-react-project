const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersList: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map((user) => {
                    if (user.id === action.userID) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                usersList: [...state.usersList, ...action.usersList]
            };
        default:
            return state;
    }
};


export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (usersList) => ({type: SET_USERS, usersList});


export default userReducer;