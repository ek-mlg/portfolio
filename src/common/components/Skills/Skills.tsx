import React from 'react';
import s from './Skills.module.scss';
import Title from "../Title/Title";
import {AttentionSeeker} from "react-awesome-reveal";
import Carousel from "../Carousel /Carousel";


const Skills = () => {

    return (
        <div className={s.SkillsBlock} id="skills">
            <div className={s.SkillsContainer}>
                <AttentionSeeker effect={"pulse"} triggerOnce={true}>
                    <Title title={"Skills &"} second={"Abilities"}/>
                </AttentionSeeker>
                <div className={s.Skills}>
                    <Carousel/>
                </div>
            </div>
        </div>
    );
};

export default Skills;