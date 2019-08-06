import React from 'react';
import s from './content.module.css'
import Profile from "./profile/profile";
import {Route} from "react-router-dom";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import Messages from "./messages/messages";


const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path='/profile' render={(data) => <Profile {...data} {...props}/>}/>
            <Route path='/messages' render={(data) => <Messages {...data} {...props}/>} />
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    )
};

export default Content;