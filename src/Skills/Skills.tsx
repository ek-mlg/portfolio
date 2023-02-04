import React from 'react';
import s from './Skills.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.SkillsBlock}>
            <div className={`${sContainer.Container} ${s.SkillsContainer}`}>
                <h2 className={s.Title}>Skills</h2>
                <div className={s.Skills}>
                    <Skill title={'TS'} description={'test description1'}/>
                    <Skill title={'CSS'} description={'test description2'}/>
                    <Skill title={'React'} description={'Modern and mobile-ready website that will help you reach all of your marketing.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;