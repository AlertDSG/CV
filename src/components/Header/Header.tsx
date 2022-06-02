import React from 'react';
import style from './Header.module.css'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={'container'}>
                <Navigation/>
            </div>
        </header>
    );
};
