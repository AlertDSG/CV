import React from 'react'
import style from './Skills.module.css'
import {CardSkill} from "./CardSkill";

export const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={'container'}>
                <div className={style.skillsBlock}>
                    <h2 className={style.title}>My skills</h2>
                    <div className={style.cardBlock}>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                    </div>
                </div>
            </div>
        </section>
    );
};

