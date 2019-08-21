// import {rerenderEntireTree} from "../render";
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

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
        ]
    },
    _callSubscriber () {
        console.log('state changed');
    },
    _addPost(postMassage, postFolder){
        let newPost = {
            id: 5, text: postMassage, likes: 0
        };
        if (postFolder === 'profilePage') {
            this._state.profilePage.dataPosts.push(newPost);
            this._state.profilePage.newPostText = '';
        } else if (postFolder === 'messagesPage') {
            this._state.messagesPage.dataMessages.push(newPost);
            this._state.messagesPage.newMessageText = '';
        }
        this._callSubscriber(this._state)
    },
    _changeNewPost(messageText, messageFolder){
        if (messageFolder === 'profilePage') {
            this._state.profilePage.newPostText = messageText;
        } else if (messageFolder === 'messagesPage') {
            this._state.messagesPage.newMessageText = messageText;
        }

        this._callSubscriber(this._state)
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },

    dispatch(action) { // {type: "ADD-POST"}
        if(action.type === ADD_POST){
            this._addPost(action.text, action.targetClassName)
        } else if (action.type === CHANGE_NEW_POST){
            this._changeNewPost(action.text, action.targetClassName)
        }
    }
};


export const addPostActionCreator = (text, targetClassName) => ({
        type: ADD_POST,
        text: text,
        targetClassName: targetClassName
    });

export const changePostActionCreator = (text, targetClassName) => ({
        type: CHANGE_NEW_POST,
        text: text,
        targetClassName: targetClassName
    });


window.store = store;
export default store;