import React from 'react';
import s from './button-textarea.module.css';

const ButtonTextarea = () => {
    let newPostElem = React.createRef();
    let addPost = () => {
        let text = newPostElem.current.value;
        alert(text);
    };
    return (
        <div className={s.userMessagesArea}>
            <div className={s.textarea}>
                <textarea ref={newPostElem} placeholder="Please, enter the text">

                </textarea>
            </div>
            <div className={s.buttonSend}>
                <button onClick={addPost}>Send</button>
            </div>
        </div>

    )
};

export default ButtonTextarea;