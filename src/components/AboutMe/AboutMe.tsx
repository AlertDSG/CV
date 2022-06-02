import React from 'react'
import style from './AboutMe.module.css'

export const AboutMe = () => {
    return (
        <section className={style.aboutMe}>
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>My name is Dmitryi</h1>
                        <span>Frontend Developer</span>
                    </div>
                    <div className={style.photoBlock}>
                        <img className={style.photo} src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="my photo"/>
                    </div>
                </div>
            </div>

        </section>
    );
};

