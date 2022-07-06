import React from 'react'
import style from './AboutMe.module.scss'

export const AboutMe = () => {
    return (
        <section className={style.aboutMe}>
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <div className={style.text}>
                        <span className={style.anyText}>Hi,</span>
                        <h1 className={style.allName}>My name is <span className={style.name}>DZMITRIY,</span></h1>
                        <span className={style.anyText}>And I'm Frontend Developer</span>
                    </div>
                    <div className={style.photoBlock}>
                    </div>
                </div>
            </div>
        </section>
    );
};

