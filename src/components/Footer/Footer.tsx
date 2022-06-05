import React from 'react';
import style from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <h2 className={style.title}>Slabko Dmitryi</h2>
                    <div className={style.cardBlock}>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                        <div className={style.item}></div>
                    </div>
                    <span>&copy; 2022</span>
                </div>
            </div>
        </footer>
    );
};

