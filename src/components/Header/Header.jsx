import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt=''/>
        <div className={s.loginBlock}>
            {props.isAuth ? <NavLink to={'/login'}>{props.profileData.fullName}</NavLink> : 'NON LOGIN'}
        </div>
    </header>
};

export default Header;