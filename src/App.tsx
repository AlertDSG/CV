import React, {useRef, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import { Main } from './components/Main/Main';
import {Footer} from "./components/Footer/Footer";
import {useSearchParams} from "react-router-dom";

function App() {

    const [position, setPosition] = useState('about')

    const positionHandler = (status: string) => {
        status !== position && setPosition(status)
        document.location.hash = `#${status}`
    }

    return (
        <div className="wrapper">
            <Header position={position} positionHandler={positionHandler} />
            <Main positionHandler={positionHandler}/>
            <Footer/>
        </div>
    );
}

export default App;
