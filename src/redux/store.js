// import {rerenderEntireTree} from "../render";
import changeAddNewPostsReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import changeAddNewMessagesReducer from "./messages-reducer";
import navlinkReducer from "./navlink-reducer";

let store = {
    _state: {
        profilePage: {
            dataPosts: [
                {id: 1, text: 'Привет', likes: 12},
                {id: 2, text: 'Как дела?', likes: 5},
                {id: 3, text: 'Заебись, братан', likes: 50},
                {ia: 4, text: 'Четко!', likes: 11}
            ],
            newPostText: ''
        },
        messagesPage: {
            dataMessages: [
                {id: 1, text: 'Hello'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: 'I am fine, thank u. And you?'},
                {ia: 4, text: 'I am too'}
            ],
            dataDialogs: [
                {id: 1, name: 'LeBron'},
                {id: 2, name: 'Wade'},
                {id: 3, name: 'Curry'},
                {ia: 4, name: 'Jordan'}
            ],
            newMessageText: ''
        },
        navBarListData: [
            {id: 1, name: 'Profile'},
            {id: 2, name: 'Messages'},
            {id: 3, name: 'News'},
            {id: 4, name: 'Music'},
            {ia: 5, name: 'Settings'}
        ],
        sidebarPage: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        debugger;
        this._state.profilePage = changeAddNewPostsReducer(this._state.profilePage, action);
        this._state.messagesPage = changeAddNewMessagesReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._state.navBarListData = navlinkReducer(this._state.navBarListData, action);
        this._callSubscriber(this._state);
    }
};


window.store = store;
export default store;