import React from 'react';
import s from './navbarElem.module.css';


const NavbarElem = (props) => {
    return (
        <div className={`${s.item}`}>
            <a href={props.link.toLowerCase()}>{props.name}</a>
        </div>
    )
};

export default NavbarElem;