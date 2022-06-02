import React from 'react';
import {AboutMe} from "../AboutMe/AboutMe";
import {Skills} from "../Skills/Skills";



 export const Main = () => {
    return (
        <main className={'main'}>
            <AboutMe/>
            <Skills/>
        </main>
    );
};
