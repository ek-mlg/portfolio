import React from 'react';
import s from './JobOptions.module.css';
import sContainer from '../Common/Styles/Container.module.css';

const JobOptions = () => {
    return (
        <div className={s.JobOptionsBlock}>
            <div className={`${sContainer.Container} ${s.JobOptionsContainer}`}>
                <h2 className={s.Title}>I'm considering office or remote work options</h2>
                <button className={s.Button}>Button</button>
            </div>
        </div>
    );
};

export default JobOptions;