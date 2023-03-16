import React from 'react';
import s from './Works.module.css';
import sContainer from "../../Styles/Container.module.css";
import Work from "./Work/Work";
import Title from "../Title/Title";

const Works = () => {
    return (
        <div className={s.WorksBlock}>
            <div className={`${sContainer.Container} ${s.WorksContainer}`}>
                <Title title={"Featured Works"} second={"Portfolio"}/>
                <div className={s.Works}>
                    <Work workTitle={'Work title 1'} workDescription={"Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1"}/>
                    <Work workTitle={'Work title 2'} workDescription={"Work description 2"}/>
                    <Work workTitle={'Work title 3'} workDescription={"Work description 3"}/>
                </div>
            </div>
        </div>
    );
};

export default Works;