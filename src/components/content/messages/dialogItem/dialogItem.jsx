import React from 'react';
import s from './../messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.name.toLowerCase()}`}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;