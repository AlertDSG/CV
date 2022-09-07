import React from 'react'
import style from './AboutMe.module.scss'
import Tilt from 'react-parallax-tilt'
import {Particle} from "../../common/Particle"

type AboutType = {
    positionHandler: (status: string) => void
}
export const AboutMe = ({positionHandler}: AboutType) => {

    return (
        <section id={'about'} className={style.aboutMe} onWheel={event => positionHandler(event.currentTarget.id)}>
            <Particle className={style.particles}/>
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <div className={style.text}>
                        <span className={style.anyText}>Hi,</span>
                        <h1 className={style.allName}>My name is <span className={style.name}>DZMITRIY,</span></h1>
                        <span className={style.anyText}>Frontend Developer</span>
                    </div>
                    <Tilt glareReverse={true}>
                        <div className={style.photoBlock}>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

