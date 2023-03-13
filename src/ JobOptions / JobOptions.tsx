import React from 'react';
import s from './JobOptions.module.css';
import sContainer from '../Common/Styles/Container.module.css';
import Title from "../Title/Title";

const JobOptions = () => {
    return (
        <div className={s.JobOptionsBlock}>
            <div className={`${sContainer.Container} ${s.JobOptionsContainer}`}>
                <Title title={"I'm considering office or remote work options"} second={"second"}/>
                <button className={s.Button}>Button</button>
            </div>
        </div>
    );
};

export default JobOptions;