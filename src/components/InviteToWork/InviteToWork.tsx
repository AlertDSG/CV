import React from 'react';
import style from "./Invite.module.css";


export const InviteToWork = () => {
    return (
        <section className={style.invite}>
            <div className={'container'}>
                <div className={style.inviteBlock}>
                    <h2 className={style.title}>Considering remote work</h2>
                    <button className={style.btn}>Invite me</button>
                </div>
            </div>
        </section>
    );
};

