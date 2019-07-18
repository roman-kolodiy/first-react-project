import React from 'react';
import s from './navbarElem.module.css';
import {NavLink} from "react-router-dom";


const NavbarElem = (props) => {
    return (
        <div className={`${s.item}`}>
            <NavLink to={props.link.toLowerCase()} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
};

export default NavbarElem;