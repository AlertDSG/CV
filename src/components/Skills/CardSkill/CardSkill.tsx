import React from 'react';
import style from './CardSkill.module.scss'

type SkillPropsType = {
    info: {
        style:{
            backgroundImage: string
        }
        technologies:string
    }
}

export const CardSkill = (props: SkillPropsType) => {

    return (
        <div className={style.cardBody}>
            <div style={props.info.style} className={style.cardHeader}>
            </div>
            <h3 className={style.technologies}>{props.info.technologies}</h3>
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis cumque dolor dolore eaque earum eius eligendi esse fugiat id inventore ipsa magnam optio perspiciatis porro quaerat, quia quibusdam ullam.</p>*/}
        </div>
    );
};

