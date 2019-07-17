import React from 'react';
import s from './navbar.module.css';
import NavbarElem from "./navbarElem/navbarElem";

let navBarListData = ['Profile', 'Dialogs', 'News', 'Music', 'Settings'];
let navBarList = navBarListData.map((name) =>
    <NavbarElem key={name} link={`/${name}`} name={name}/>
);


const Navigation = () => {
    return (
        <nav className={s.navigation}>
            {navBarList}
        </nav>
    )
};

export default Navigation;