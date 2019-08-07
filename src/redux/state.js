import {rerenderEntireTree} from "../render";

let state = {
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
            {id:1, text: 'Hello'},
            {id:2, text: 'How are you?'},
            {id:3, text: 'I am fine, thank u. And you?'},
            {ia:4, text: 'I am too'}
        ],
        dataDialogs: [
            {id:1, name: 'LeBron'},
            {id:2, name: 'Wade'},
            {id:3, name: 'Curry'},
            {ia:4, name: 'Jordan'}
        ],
        newMessageText: ''
    },
    navBarListData: [
        {id:1, name: 'Profile'},
        {id:2, name: 'Messages'},
        {id:3, name: 'News'},
        {id:4, name: 'Music'},
        {ia:5, name: 'Settings'}
    ],
};

window.state = state;

export let addPost = (postMassage, postFolder) => {
    let newPost = {
        id: 5, text: postMassage, likes: 0
    };
    if(postFolder === 'profilePage'){
        state.profilePage.dataPosts.push(newPost);
        state.profilePage.newPostText = '';
    } else if (postFolder === 'messagesPage'){
        state.messagesPage.dataMessages.push(newPost);
        state.messagesPage.newMessageText = '';
    }

    rerenderEntireTree(state)
};

export let changeNewPost = (messageText, messageFolder) => {
    if(messageFolder === 'profilePage'){
        state.profilePage.newPostText = messageText;
    } else if (messageFolder === 'messagesPage'){
        state.messagesPage.newMessageText = messageText;
    }

    rerenderEntireTree(state)
};


export default state;