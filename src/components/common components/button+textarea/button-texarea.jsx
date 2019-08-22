import React from 'react';
import s from './button-textarea.module.css';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import {addMessageActionCreator, changeMessageActionCreator} from "../../../redux/messages-reducer";


const ButtonTextarea = (props) => {
    let newPostElem = React.createRef();
    let addPost = (e) => {
        let targetClassName = e.target.className;
        let text = newPostElem.current.value;
        // let action = {type: 'ADD-POST', text: text, targetClassName:targetClassName};
        if(targetClassName === 'profilePage'){
            props.dispatch(addPostActionCreator(text, targetClassName));
        } else if (targetClassName === 'messagesPage'){
            props.dispatch(addMessageActionCreator(text, targetClassName));
        }
    };

    let onChangePost = (e) => {
        let targetClassName = e.target.className;
        let text = newPostElem.current.value;
        if(targetClassName === 'profilePage'){
            props.dispatch(changePostActionCreator(text, targetClassName));
        } else if (targetClassName === 'messagesPage'){
            props.dispatch(changeMessageActionCreator(text, targetClassName));
        }
    };
    return (
        <div className={s.userMessagesArea}>
            <div className={s.textarea}>
                <textarea ref={newPostElem} className={props.folderArea} onChange={onChangePost} value={props.folderArea === 'profilePage' ? props.appData.profilePage.newPostText : props.appData.messagesPage.newMessageText} placeholder="Please, enter the text"/>
            </div>
            <div className={s.buttonSend}>
                <button onClick={addPost} className={props.folderArea}>Send</button>
            </div>
        </div>

    )
};

export default ButtonTextarea;