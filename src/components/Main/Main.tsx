import React from 'react';
import {AboutMe} from "../AboutMe/AboutMe";
import {Skills} from "../Skills/Skills";
import {Projects} from "../Projects/Projects";



 export const Main = () => {
    return (
        <main className={'main'}>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </main>
    );
};
