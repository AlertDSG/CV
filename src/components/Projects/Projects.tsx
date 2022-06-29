import React from 'react';
import style from './Projects.module.scss';
import {CardProject} from "./CardProject/CardProject";


export const Projects = () => {
    return (
        <section className={style.projects}>
            <div className={'container'}>
                <div className={style.projectsBlock}>
                    <h2 className={style.title}>
                        <span className={style.span}>My projects
                        </span>
                    </h2>
                    <div className={style.cardBlock}>
                        <CardProject/>
                        <CardProject/>
                    </div>
                </div>
            </div>

        </section>
    );
};

