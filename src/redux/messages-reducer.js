const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';


let initialState = {
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
};

const changeAddNewMessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 5, text: action.text, likes: 0
            };
            state.dataMessages.push(newPost);
            state.newMessageText = '';
            return state;
        case CHANGE_NEW_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = (text, targetClassName) => ({
    type: ADD_MESSAGE,
    text: text,
    targetClassName: targetClassName
});

export const changeMessageActionCreator = (text, targetClassName) => ({
    type: CHANGE_NEW_MESSAGE,
    text: text,
    targetClassName: targetClassName
});


export default changeAddNewMessagesReducer;