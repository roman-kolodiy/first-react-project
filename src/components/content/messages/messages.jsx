import React from 'react';
import s from './messages.module.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.name.toLowerCase()}`}>{props.name}</NavLink>
        </div>
    )
};

const UserMessages = (props) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
};

const Messages = () => {
    let arrDialog = ['LeBron', 'Wade', 'Curry', 'Jordan'];

    let dataDialog = arrDialog.map((name, index) => {
        return <UserDialog key={index} id={index + 1} name={name}/>;
    });

    let arrMessages = ['Hello', 'How are you?', 'I am fine, thank u. And you?', 'I am too'];

    let dataMessage = arrMessages.map((message, index) => {
        return <UserMessages key={index} id={index + 1} message={message}/>;
    });

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