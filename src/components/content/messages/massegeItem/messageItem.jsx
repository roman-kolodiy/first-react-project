import React from 'react';
import s from './../messages.module.css'

const MessageItem = (props) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
};

export default MessageItem;