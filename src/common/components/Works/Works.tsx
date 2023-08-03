import React from 'react';
import s from './Works.module.scss';
import Work from "./Work/Work";
import Title from "../Title/Title";
import {works} from "../../../data";

const Works = () => {

    return (
        <div className={s.WorksBlock} id="works">
            <div className={s.WorksContainer}>
                <Title title={"Featured Works"} second={"Portfolio"}/>
                <div className={s.Works}>
                    {works.map((el, index) =>
                        <Work
                            key={index}
                            workTitle={el.workTitle}
                            workDescription={el.workDescription}
                            style={el.style}
                            href={el.href}
                        />)}
                </div>
            </div>
        </div>
    );
};

export default Works;