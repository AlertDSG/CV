import React from 'react';
import style from './Projects.module.css'

export const CardProject = () => {
    return (
        <div className={style.cardBody}>
            <div className={style.headerCard}>
                <a className={style.btn} href="#">Look project</a>
            </div>
            <h3>Name project</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dicta dolorem ducimus esse et facere fugiat </p>
        </div>
    );
};
