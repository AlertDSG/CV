import React from 'react';
import {AboutMe} from "../AboutMe/AboutMe";
import {Skills} from "../Skills/Skills";
import {Projects} from "../Projects/Projects";
import {InviteToWork} from "../InviteToWork/InviteToWork";



 export const Main = () => {
    return (
        <main className={'main'}>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <InviteToWork/>
        </main>
    );
};
