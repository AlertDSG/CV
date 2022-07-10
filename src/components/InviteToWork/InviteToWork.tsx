import React from 'react';
import style from "./Invite.module.scss";
import {Title} from "../UniversalComponents/Title";


export const InviteToWork = () => {
    return (
        <section className={style.invite}>
            <div className={'container'}>
                <Title name={'location'} className={style.title}/>
                <div className={style.inviteBlock}>
                    <h3 className={style.subTitle}>Ready to work from home</h3>
                    <button className={style.btn}>Invite me</button>
                </div>
            </div>
        </section>
    );
};

