const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

let initialState = {
    dataPosts: [
        {id: 1, text: 'Привет', likes: 12},
        {id: 2, text: 'Как дела?', likes: 5},
        {id: 3, text: 'Заебись, братан', likes: 50},
        {ia: 4, text: 'Четко!', likes: 11}
    ],
    newPostText: ''
};


const changeAddNewPostsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, text: action.text, likes: 0
            };
            state.dataPosts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
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


export default changeAddNewPostsReducer;