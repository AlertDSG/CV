import React from 'react'
import style from './AboutMe.module.scss'



// import Particles from "react-particles-js";
//
//
//
// const particlesOpt = {
//     "particles": {
//         "number": {
//             "value": 150,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             },
//         },
//     },
// }
type AboutType = {
    positionHandler: (status: string) => void
}
export const AboutMe = ({positionHandler}: AboutType) => {


    return (
        <section id={'about'} className={style.aboutMe} onWheel={event => positionHandler(event.currentTarget.id)}>
            {/*<Particles />*/}
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <div className={style.text}>
                        <span className={style.anyText}>Hi,</span>
                        <h1 className={style.allName}>My name is <span className={style.name}>DZMITRIY,</span></h1>
                        <span className={style.anyText}>And I'm Frontend Developer</span>
                    </div>
                    <div className={style.photoBlock}>
                    </div>
                </div>
            </div>
        </section>
    );
};

