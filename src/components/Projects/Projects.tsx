import React from 'react'
import style from './Projects.module.scss'
import {CardProject} from "./CardProject/CardProject"
import todo from '../../assets/todolist.png'
import social from '../../assets/social.png'


export const Projects = () => {

    const cardProjects = [
        {
            style: {
                backgroundImage: `url(${todo})`
            },
            name: 'TodoList',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Material UI, SCSS',
            description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.'
        },
        {
            style: {
                backgroundImage: `url(${social})`
            },
            name: 'Social network',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS',
            description: 'SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.'
        }
]

    const cardProject = cardProjects.map(c => <CardProject info={c} />)

return (
    <section className={style.projects}>
        <div className={'container'}>
            <div className={style.projectsBlock}>
                <h2 className={style.title}>
                        <span className={style.span}>My projects
                        </span>
                </h2>
                <div className={style.cardBlock}>
                    {cardProject}
                </div>
            </div>
        </div>

    </section>
);
}
;

