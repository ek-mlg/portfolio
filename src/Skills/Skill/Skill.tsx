import React from 'react';
import s from './Skill.module.css';

type SkillPropsType = {
    title: string,
    description: string,
    src: any
}

const Skill: React.FC<SkillPropsType> = ({title, description, src}) => {
    return (
        <div className={s.Skill}>
            <img className={s.Icon} src={src}/>
            <div className={s.Text}>
                <h3 className={s.Title}>{title}</h3>
                <span className={s.Description}>{description}</span>
            </div>
        </div>
    );
};

export default Skill;