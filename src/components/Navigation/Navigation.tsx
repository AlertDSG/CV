import React from 'react';
import style from "./Navigation.module.scss";

 export const Navigation = () => {
    return (
        <nav className={style.navBlock}>
            <ul className={style.bodyLinks}>
                <li className={style.link}><a  href={'#'} >Home</a></li>
                <li><a href={'#skills'} >Skills</a></li>
                <li><a href={'#projects'} >Projects</a></li>
                <li><a href={'#contacts'} >Contacts</a></li>
            </ul>
        </nav>
    );
};
