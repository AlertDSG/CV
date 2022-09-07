import React from 'react';
import {AboutMe} from "../AboutMe/AboutMe";
import {Skills} from "../Skills/Skills";
import {Projects} from "../Projects/Projects";
import {InviteToWork} from "../InviteToWork/InviteToWork";
import {Form} from "../FormBlock/Form";

type MainType ={
    positionHandler: (status: string) => void
}

 export const Main = ({positionHandler}: MainType) => {
    return (
        <main className={'main'}>

            <AboutMe positionHandler={positionHandler}/>
            <Skills positionHandler={positionHandler}/>
            <Projects positionHandler={positionHandler}/>
            <InviteToWork/>
            <Form positionHandler={positionHandler}/>
        </main>
    );
};
