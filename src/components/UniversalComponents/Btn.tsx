import React from 'react';
import style from "./Btn.module.scss";

type BtnPropsType = {
    className?: string
    name?: string
    btn?: boolean
}

export const Btn = (props: BtnPropsType) => {
    const someStyle = `${style.btn} ${props.className}`

    return <>
        {
            !props.btn
                ? <a className={someStyle} href="#">{props.name}</a>
                : <button className={someStyle}>{props.name}</button>}
        </>
};
