import React from 'react'
import style from './Skills.module.scss'
import {CardSkill} from "./CardSkill/CardSkill"
import react from '../../assets/icons8-react.svg'
import redux from '../../assets/icons8-redux.svg'
import js from '../../assets/icons8-javascript.svg'
import {Title} from "../UniversalComponents/Title";

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
                   <Title name={'Skills'} className={style.title}/>
                    <div className={style.cardBlock}>
                        {cardSkill}
                    </div>
                </div>
            </div>
        </section>
    );
};

