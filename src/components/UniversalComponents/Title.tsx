import React from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    className?: string
    name: string
}

export const Title = (props: TitlePropsType) => {

    const someStyle = `${style.span} ${props.className}`

    return (
        <h2 className={style.title}>
                        <span className={someStyle}>
                            {props.name}
                        </span>
        </h2>
    );
};
