import React from 'react';
import style from './CardProject.module.scss'

type CardProjectPropsType = {
    info: {
        style: {
            backgroundImage: string
        }
        name: string
        description: string
        technologies: string
    }
}
export const CardProject = (props: CardProjectPropsType) => {
    return (
        <div className={style.cardBody}>
            <div style={props.info.style} className={style.cardHeader}>
                <a className={style.btn} href="#">Look project</a>
            </div>
            <div className={style.cardFooter}>
                <h3 className={style.title}>{props.info.name}</h3>
                <p className={style.description}>{props.info.description}</p>
                <p className={style.description}>{props.info.technologies}</p>
            </div>
        </div>
    );
};
