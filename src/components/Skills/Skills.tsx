import React from 'react'
import style from './Skills.module.scss'
import {CardSkill} from "./CardSkill/CardSkill"
import react from '../../assets/icons8-react.svg'
import redux from '../../assets/icons8-redux.svg'
import js from '../../assets/icons8-javascript.svg'

export const Skills = () => {

    const arrSkills = [
        {style: {backgroundImage: `url(${react})`}, technologies: "React"},
        {style: {backgroundImage: `url(${redux})`}, technologies: "Redux"},
        {style:{backgroundImage: `url(${js})`}, technologies: "JavaScript"},
    ]

    const cardSkill = arrSkills.map(a =><CardSkill info={a} />)

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
                        {cardSkill}
                    </div>
                </div>
            </div>
        </section>
    );
};

