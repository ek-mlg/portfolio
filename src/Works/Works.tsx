import React from 'react';
import s from './Works.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={s.WorksBlock}>
            <div className={`${sContainer.Container} ${s.WorksContainer}`}>
                <h2 className={s.Title}>Works</h2>
                <div className={s.Works}>
                    <Work workTitle={'Work title 1'} workDescription={"Work description 1"}/>
                    <Work workTitle={'Work title 2'} workDescription={"Work description 2"}/>
                </div>
            </div>
        </div>
    );
};

export default Works;