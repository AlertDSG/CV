import React from 'react';
import style from './Form.module.scss';
import {Title} from "../UniversalComponents/Title";


export const Form = () => {

    const inputText = `${style.input} ${style.item}`

    return (
        <section className={style.form}>
            <div className={'container'}>
                <div className={style.formBlock}>
                    <Title name={'contacts'}/>
                    <form className={style.formBody}>
                        <input className={style.inputText} placeholder={'Some text'} type="text"/>
                        <input className={style.inputText} placeholder={'Some text'} type="text"/>
                        <textarea className={style.inputMessage} placeholder={'Some text'}></textarea>
                        <input className={style.btn} type="submit" value={'Submit'}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

