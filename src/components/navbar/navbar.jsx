import React from 'react';
import s from './navbar.module.css';
import NavbarElem from "./navbarElem/navbarElem";

const Navigation = (props) => {
    let navBarList = props.navBarListData.map((data, index) =>
        <NavbarElem key={index} link={`/${data.name}`} name={data.name}/>
    );

    return (
        <nav className={s.navigation}>
            {navBarList}
        </nav>
    )
};

export default Navigation;