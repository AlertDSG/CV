import React from 'react'
import style from './Projects.module.scss'
import {CardProject} from "./CardProject/CardProject"
import todo from '../../assets/img/projects/todolist.png'
import social from '../../assets/img/projects/social.png'
import {Title} from "../../common/UniversalComponents/Title";
import {Fade} from "react-awesome-reveal";

const cardProjects = [
    {
        style: {
            backgroundImage: `url(${todo})`
        },
        name: 'TodoList',
        technologies: 'Technologies: JavaScript, TypeScript, React, Redux Toolkit, Formik, Axios, Material UI, CSS module',
        description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.',
        nameBtn: 'look project'
    },
    {
        style: {
            backgroundImage: `url(${social})`
        },
        name: 'Social network',
        technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Formik, Axios, Reselect, SCSS',
        description: 'SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.',
        nameBtn: 'look project'
    },
    {
        style: {
            backgroundImage: `url(${social})`
        },
        name: 'Cards',
        technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Formik, Axios, CSS module, Material UI',
        description: 'SPA for study - question and answer. Implemented: login page with validation, error displaying; 404 page. Creating learning app in team with using git, work with axios(CRUD),login/logout flow, pagination, form and validation/file uploading.',
        nameBtn: 'look project'
    }
]

type ProjectsType = {
    positionHandler: (id: string) => void
}

export const Projects = ({positionHandler}: ProjectsType) => {

    const cardProject = cardProjects.map((c, i) => <CardProject key={i} info={c}/>)

    return (
        <section id={'projects'} className={style.projects} onWheel={event => positionHandler(event.currentTarget.id)}>
            <Fade cascade direction={'left'}>
                <div className={'container'}>
                    <div className={style.projectsBlock}>
                        <Title name={'projects'} className={style.title}/>
                        <div className={style.cardBlock}>
                            {cardProject}
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}


