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
            <Route path='/profile' render={() => <Profile {...props.profilePage}/>}/>
            <Route path='/messages' render={() => <Messages {...props.messagesPage}/>} />
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    )
};

export default Content;