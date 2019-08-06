import React from 'react';
import s from './messages.module.css'
import DialogItem from "./dialogItem/dialogItem";
import MessageItem from "./massegeItem/messageItem";

const Messages = (props) => {

    let dataDialog = props.data.dataDialogs.map((data, index) => <DialogItem key={index} id={data.id} name={data.name}/>);
    let dataMessage = props.data.dataMessages.map((data, index) => <MessageItem key={index} id={data.id} message={data.messageText}/>);

    return (
        <div className={s.messagesContent}>
            <div className={s.usersDialogs}>
                {dataDialog}
            </div>
            <div className={s.userContentDialog}>
                {dataMessage}
            </div>
        </div>
    )
};

export default Messages;