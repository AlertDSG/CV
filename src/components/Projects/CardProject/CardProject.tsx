import React from 'react';
import style from './CardProject.module.scss'
import {Btn} from "../../../common/UniversalComponents/Btn";

type CardProjectPropsType = {
    info: {
        style: {
            backgroundImage: string
        }
        name: string
        description: string
        technologies: string
        nameBtn: string
    }
}
export const CardProject = (props: CardProjectPropsType) => {
    return (
        <div className={style.cardBody}>
                <div style={props.info.style} className={style.cardHeader}>
                    <Btn name={props.info.nameBtn} className={style.button} btn={false}/>
                </div>
            <div className={style.cardFooter}>
                <h3 className={style.title}>{props.info.name}</h3>
                <p className={style.description}>{props.info.description}</p>
                <p className={style.description}>{props.info.technologies}</p>
            </div>
        </div>
    );
};
