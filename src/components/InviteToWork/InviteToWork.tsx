import React from 'react';
import style from "./Invite.module.scss";
import {Title} from "../UniversalComponents/Title";
import {Btn} from "../UniversalComponents/Btn";


export const InviteToWork = () => {
    return (
        <section className={style.invite}>
            <div className={'container'}>
                <Title name={'location'} className={style.title}/>
                <div className={style.inviteBlock}>
                    <h3 className={style.subTitle}>Ready to work from home</h3>
                    <Btn name={'invite'} btn={true} className={style.button}/>
                </div>
            </div>
        </section>
    );
};

