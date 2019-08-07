import React from 'react';
import s from './messages.module.css'
import DialogItem from "./dialogItem/dialogItem";
import MessageItem from "./massegeItem/messageItem";
import ButtonTextarea from "../../common components/button+textarea/button-texarea";

const Messages = (props) => {
    let dataDialog = props.dataDialogs.map((data, index) => <DialogItem key={index} id={data.id} name={data.name}/>);
    let dataMessage = props.dataMessages.map((data, index) => <MessageItem key={index} id={data.id}
                                                                           message={data.messageText}/>);

    return (
        <div className={s.messagesContent}>
            <div className={s.usersDialogs}>
                {dataDialog}
            </div>
            <div className={s.userContentDialog}>
                {dataMessage}
            </div>
            <ButtonTextarea/>
        </div>
    )
};

export default Messages;