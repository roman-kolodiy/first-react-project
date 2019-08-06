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
    let dataDialogs = [
        {id:1, name: 'LeBron'},
        {id:2, name: 'Wade'},
        {id:3, name: 'Curry'},
        {ia:4, name: 'Jordan'}
        ];

    let dataDialog = dataDialogs.map((data, index) => {
        return <UserDialog key={index} id={data.id} name={data.name}/>;
    });

    let dataMessages = [
        {id:1, messageText: 'Hello'},
        {id:2, messageText: 'How are you?'},
        {id:3, messageText: 'I am fine, thank u. And you?'},
        {ia:4, messageText: 'I am too'}
    ];

    let dataMessage = dataMessages.map((data, index) => {
        return <UserMessages key={index} id={data.id} message={data.messageText}/>;
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