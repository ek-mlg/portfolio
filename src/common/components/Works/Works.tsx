import React from 'react';
import s from './Works.module.scss';
import sContainer from "../../styles/Container.module.scss";
import Work from "./Work/Work";
import Title from "../Title/Title";

const Works = () => {
    return (
        <div className={s.WorksBlock}>
            <div className={`${sContainer.Container} ${s.WorksContainer}`}>
                <Title title={"Featured Works"} second={"Portfolio"}/>
                <div className={s.Works}>
                    <Work workTitle={'TodoList'} workDescription={"Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1"}/>
                    <Work workTitle={'Social network'} workDescription={"The React course - Way of the Samurai, this project helped me understand what a successful SPA is built on, comprehended the work of flux, react-store, used many libraries, including: redux, redux-thunk, axios, React router DOM."}/>
                    <Work workTitle={'Counter'} workDescription={"My first project on React, here used controlled components to create an intuitive user interface, also the property of storing data in localStorage, conditional rendering."}/>
                </div>
            </div>
        </div>
    );
};

export default Works;