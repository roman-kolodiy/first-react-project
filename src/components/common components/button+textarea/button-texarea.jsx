import React from 'react';
import s from './button-textarea.module.css';

const ButtonTextarea = (props) => {
    let newPostElem = React.createRef();
    let onAddPost = (e) => {
        let targetClassName = e.target.className;
        let text = newPostElem.current.value;
        props.addNewPosts(text, targetClassName);
    };

    let onChangePost = (e) => {
        let targetClassName = e.target.className;
        let text = newPostElem.current.value;
        props.updateNewPosts(text, targetClassName);
    };
    return (
        <div className={s.userMessagesArea}>
            <div className={s.textarea}>
                <textarea ref={newPostElem} className={props.folderArea} onChange={onChangePost} value={props.folderArea === 'profilePage' ? props.state.profilePage.newPostText : props.state.messagesPage.newMessageText} placeholder="Please, enter the text"/>
            </div>
            <div className={s.buttonSend}>
                <button onClick={onAddPost} className={props.folderArea}>Send</button>
            </div>
        </div>

    )
};

export default ButtonTextarea;