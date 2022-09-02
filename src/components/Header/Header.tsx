import React from 'react';
import style from './Header.module.scss'
import {Navigation} from "../Navigation/Navigation";

type HeaderType = {
    position: string
    positionHandler: (status: string) => void
}

export const Header = ({position, positionHandler}: HeaderType) => {
    return (
        <header className={style.header}>
            <div className={'container'}>
                <Navigation position={position} positionHandler={positionHandler}/>
            </div>
        </header>
    );
};
