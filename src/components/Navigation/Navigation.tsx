import React from 'react';
import style from "./Navigation.module.scss";

type NavigationType = {
    position: string
    positionHandler: (status: string) => void
}

export const Navigation = ({position, positionHandler}: NavigationType) => {
    const styles = (id: string) => {
        return position !== id ? `${style.link} ` : `${style.link} ${style.linkActive} `
    }

    const onclickHandler = (status: string) => {
        positionHandler(status)
    }

    return (
        <nav className={style.navBlock}>
            <ul className={style.bodyLinks}>
                <li><a onClick={() =>onclickHandler('about')} className={styles('about')} href={'#about'}>Home</a></li>
                <li><a onClick={() =>onclickHandler('skills')} className={styles('skills')} href={'#skills'}>Skills</a></li>
                <li><a onClick={() =>onclickHandler('projects')} className={styles('projects')} href={'#projects'}>Projects</a></li>
                <li><a onClick={() =>onclickHandler('contacts')} className={styles('contacts')} href={'#contacts'}>Contacts</a></li>
            </ul>
        </nav>
    );
};
