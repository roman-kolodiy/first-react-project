import React from 'react';
import s from './messages.module.css'
import DialogItem from "./dialogItem/dialogItem";
import MessageItem from "./massegeItem/messageItem";
import ButtonTextareaContainer from "../../common components/button+textarea/button-texareaContainer";

const Messages = (props) => {
    let folderArea = 'messagesPage';
    let dataDialog = props.state.messagesPage.dataDialogs.map((data, index) => <DialogItem key={index} id={data.id} name={data.name}/>);
    let dataMessage = props.state.messagesPage.dataMessages.map((data, index) => <MessageItem key={index} id={data.id}
                                                                          message={data.text}/>);
    return (
        <div className={s.messagesContent}>
            <div className={s.usersDialogs}>
                {dataDialog}
            </div>
            <div className={s.userContentDialog}>
                {dataMessage}
            </div>
            <ButtonTextareaContainer {...props} folderArea={folderArea}/>
        </div>
    )
};

export default Messages;