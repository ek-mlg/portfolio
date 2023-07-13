import React from 'react';
import s from './Skills.module.scss';
import Title from "../Title/Title";
import Carousel from "../Carousel /Carousel";


const Skills = () => {

    return (
        <div className={s.SkillsBlock} id="skills">
            <div className={s.SkillsContainer}>
                    <Title title={"Skills &"} second={"Abilities"}/>
                <div className={s.Skills}>
                    <Carousel/>
                </div>
            </div>
        </div>
    );
};

export default Skills;