import React from 'react';
import s from './Skill.module.css';
import Icons from "../../Icons/Icons";

type SkillPropsType = {
    title: string,
    description: string,
    src: any,
    alt: string
}

const Skill: React.FC<SkillPropsType> = ({title, description, src, alt}) => {
    return (
        <div className={s.Skill}>
            <Icons src={src} alt={alt}/>
            <div className={s.Text}>
                <h3 className={s.Title}>{title}</h3>
                <span className={s.Description}>{description}</span>
            </div>
        </div>
    );
};

export default Skill;