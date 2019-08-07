import React from 'react';
import s from './button-textarea.module.css';

const ButtonTextarea = (props) => {
    let newPostElem = React.createRef();
    let addPost = (e) => {
        let targetClassName = e.target.className;
        let text = newPostElem.current.value;
        props.addPost(text, targetClassName);
    };

    let onChangePost = (e) => {
        let targetClassName = e.target.className;
        let text = newPostElem.current.value;
        props.changeNewPost(text, targetClassName);
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