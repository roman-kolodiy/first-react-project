import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import {addMessageActionCreator, changeMessageActionCreator} from "../../../redux/messages-reducer";
import ButtonTextarea from "./button-texarea";


const ButtonTextareaContainer = (props) => {
    let addPost = (text, targetClassName) => {
        if(targetClassName === 'profilePage'){
            props.store.dispatch(addPostActionCreator(text, targetClassName));
        } else if (targetClassName === 'messagesPage'){
            props.store.dispatch(addMessageActionCreator(text, targetClassName));
        }
    };

    let onChangePost = (text, targetClassName) => {
        if(targetClassName === 'profilePage'){
            props.store.dispatch(changePostActionCreator(text, targetClassName));
        } else if (targetClassName === 'messagesPage'){
            props.store.dispatch(changeMessageActionCreator(text, targetClassName));
        }
    };
    return (
        <ButtonTextarea addNewPosts={addPost} updateNewPosts={onChangePost} {...props}/>
    )
};

export default ButtonTextareaContainer;