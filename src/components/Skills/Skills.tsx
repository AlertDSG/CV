import React from 'react'
import style from './Skills.module.scss'
import {CardSkill} from "./CardSkill/CardSkill"
import react from '../../assets/img/skills/icons8-react.svg'
import typeScript from '../../assets/img/skills/typescript-2.svg'
import redux from '../../assets/img/skills/icons8-redux.svg'
import js from '../../assets/img/skills/icons8-javascript.svg'
import formic from '../../assets/img/skills/formik.svg'
import html from '../../assets/img/skills/html-1.svg'
import css from '../../assets/img/skills/css-3.svg'
import sass from '../../assets/img/skills/icons8-sass.svg'
import story from '../../assets/img/skills/storybook.svg'
import mui from '../../assets/img/skills/material-ui-1.svg'
import api from '../../assets/img/skills/axios.svg'
import git from '../../assets/img/skills/icons8-git.svg'
import {Title} from "../../common/UniversalComponents/Title";
import {Fade} from "react-awesome-reveal";

const arrSkills = [
    {style: {backgroundImage: `url(${react})`}, technologies: "React"},
    {style: {backgroundImage: `url(${redux})`}, technologies: "Redux/ ReduxToolkit/ ReduxThunk"},
    {style: {backgroundImage: `url(${js})`}, technologies: "JavaScript"},
    {style: {backgroundImage: `url(${formic})`}, technologies: "Formik"},
    {style: {backgroundImage: `url(${typeScript})`}, technologies: "TypeScript"},
    {style: {backgroundImage: `url(${html})`}, technologies: "Html"},
    {style: {backgroundImage: `url(${css})`}, technologies: "CSS"},
    {style: {backgroundImage: `url(${sass})`}, technologies: "Sass"},
    {style: {backgroundImage: `url(${story})`}, technologies: "Storybook"},
    {style: {backgroundImage: `url(${mui})`}, technologies: "Material-UI"},
    {style: {backgroundImage: `url(${api})`}, technologies: "Axios/ Rest API"},
    {
        style: {backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMu4FwempAik5XtP2M6QID5dGCmS0-sxh3vhmja7Z5Q&s)`},
        technologies: "Unit test"
    },
    {style: {backgroundImage: `url(${git})`}, technologies: "Git"},
]

type SkillsType = {
    positionHandler: (id: string) => void
}

export const Skills = ({positionHandler}: SkillsType) => {

    const cardSkill = arrSkills.map((a, i) => <CardSkill key={i} info={a}/>)

    return (
        <section id={'skills'} className={style.skills} onWheel={event => positionHandler(event.currentTarget.id)}>
            <Fade cascade direction={'right'}>
                <div className={'container'}>
                    <div className={style.skillsBlock}>
                        <Title name={'Skills'} className={style.title}/>
                        <div className={style.cardBlock}>
                            {cardSkill}
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

