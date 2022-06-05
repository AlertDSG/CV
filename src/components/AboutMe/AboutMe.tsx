import React from 'react'
import style from './AboutMe.module.css'

export const AboutMe = () => {
    return (
        <section className={style.aboutMe}>
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Dmitryi Slabko</h1>
                        <span>Frontend Developer</span>
                    </div>
                    <div className={style.photoBlock}>
                    </div>
                </div>
            </div>

        </section>
    );
};

