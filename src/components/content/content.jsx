import React from 'react';
import s from './content.module.css'
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import {Route} from "react-router-dom";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";


const Content = () => {
    return (
        <div className={s.content}>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    )
};

export default Content;