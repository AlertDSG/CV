import React from 'react';
import style from './Footer.module.scss';
import {Linkedin} from "../SvgComponents/Linkedin";
import {Codewars} from "../SvgComponents/Codewars";
import {GitHub} from "../SvgComponents/GitHub";
import {Cv} from "../SvgComponents/Cv";

export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={'container'}>
                <div className={style.contentBlock}>
                    <h2 className={style.title}>Slabko Dzmitryi</h2>
                    <div className={style.cardBlock}>
                        <div className={style.item}>
                            <a target={'_blank'} href="https://www.linkedin.com/in/dzmitryi-slabko"><Linkedin
                                className={style.img}/>
                            </a>
                        </div>
                        <div className={style.item}>
                            <a target={'_blank'} href="https://www.codewars.com/users/AlertDSG">
                                <Codewars
                                    className={style.img}/>
                            </a>
                        </div>
                        <div className={style.item}>
                            <a target={'_blank'} href="https://github.com/AlertDSG">
                                <GitHub
                                    className={style.img}/>
                            </a>
                        </div>
                        <div className={style.item}>
                            <a target={'_blank'} href="">
                                <Cv className={style.img}/>
                            </a>
                        </div>
                    </div>
                    <span className={style.copy}>&copy; 2022</span>
                </div>
            </div>
        </footer>
    );
};

