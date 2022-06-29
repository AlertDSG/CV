import React from 'react';
import style from './CardProject.module.scss'

export const CardProject = () => {
    return (
        <div className={style.cardBody}>
            <div className={style.cardHeader}>
                <a className={style.btn} href="#">Look project</a>
            </div>
            <div className={style.cardFooter}>
                <h3>Name project</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dicta dolorem ducimus esse et facere
                    fugiat </p>
            </div>
        </div>
    );
};
