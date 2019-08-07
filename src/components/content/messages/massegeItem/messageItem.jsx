import React from 'react';
import s from './../messages.module.css'

const MessageItem = (props) => {
    return (
        <div>
            <div className={s.userMessages}>{props.message}</div>
        </div>
    )
};

export default MessageItem;