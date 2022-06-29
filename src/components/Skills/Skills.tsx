import React from 'react'
import style from './Skills.module.scss'
import {CardSkill} from "./CardSkill/CardSkill";

export const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={'container'}>
                <div className={style.skillsBlock}>
                    <h2 className={style.title}>
                        <span className={style.span}>
                            My skills
                        </span>
                    </h2>
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

