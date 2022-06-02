import React from 'react';
import style from './Skills.module.css'
import icon from '../../logo.svg'

export const CardSkill = () => {
    return (
        <div className={style.cardBody}>
            <div><img src={icon} alt="icon"/></div>
            <h3>React</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis cumque dolor dolore eaque earum eius eligendi esse fugiat id inventore ipsa magnam optio perspiciatis porro quaerat, quia quibusdam ullam.</p>
        </div>
    );
};

