import React from 'react';
import style from "./Navigation.module.css";

 export const Navigation = () => {
    return (
        <nav className={style.navBlock}>
            <ul className={style.bodyLinks}>
                <li><a href={'#'} >Home</a></li>
                <li><a href={'#'} >Skills</a></li>
                <li><a href={'#'} >Projects</a></li>
                <li><a href={'#'} >Contacts</a></li>
            </ul>
        </nav>
    );
};
