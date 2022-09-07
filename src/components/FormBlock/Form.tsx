import React from 'react';
import style from './Form.module.scss';
import {Title} from "../../common/UniversalComponents/Title";
import {Btn} from "../../common/UniversalComponents/Btn";

type FormType = {
    positionHandler: (id: string) => void
}

export const Form = ({positionHandler}: FormType) => {

    return (
        <section id={'contacts'} className={style.form} onWheel={event => positionHandler(event.currentTarget.id)}>
            <div className={'container'}>
                <div className={style.formBlock}>
                    <Title name={'contacts'}/>
                    <form className={style.formBody}>
                        <input className={style.inputText} placeholder={'Email'} type="text"/>
                        <input className={style.inputText} placeholder={'Your name'} type="text"/>
                        <textarea className={style.inputMessage} placeholder={'Some text'}/>
                        <Btn name={'submit'} btn={true} className={style.button}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

