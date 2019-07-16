import React from 'react';
import s from './navbar.module.css';

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>Setting</a>
            </div>
            <div className={s.item}>
                <a>Author</a>
            </div>
            <div className={s.item}>
                <a>Some</a>
            </div>
        </nav>
    )
};

export default Navigation;