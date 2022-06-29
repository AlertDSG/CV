import React from 'react';
import style from "./Invite.module.scss";


export const InviteToWork = () => {
    return (
        <section className={style.invite}>
            <div className={'container'}>
                <div className={style.inviteBlock}>
                    <h2 className={style.title}>Ready to work from home</h2>
                    <button className={style.btn}>Invite me</button>
                </div>
            </div>
        </section>
    );
};

