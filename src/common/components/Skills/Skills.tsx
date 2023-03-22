import React from 'react';
import s from './Skills.module.scss';
import sContainer from "../../styles/Container.module.scss";
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import TS from '../../assets/image/icons/ts.svg';
import Redux from '../../assets/image/icons/redux.svg';
import ReactSVG from '../../assets/image/icons/react.svg';

const Skills = () => {
    return (
        <div className={s.SkillsBlock}>
            <div className={`${sContainer.Container} ${s.SkillsContainer}`}>
                <Title title={"Skills &"} second={"Abilities"}/>
                <div className={s.Skills}>
                    <Skill title={'TypeScript'} description={'test description1'} src={TS} alt={"TS"}/>
                    <Skill title={'Redux'} description={'Experience with the Redux library, I understand its fundamental concepts: including state, actions, reducers and storage.'} src={Redux} alt={"Redux"}/>
                    <Skill title={'React'} description={'Modern and mobile-ready website that will help you reach all of your marketing.'} src={ReactSVG} alt={"React"}/>

                    {/*<Skill title={'CSS'} description={'test description1'} src={TS}/>
                    <Skill title={'SASS'} description={'test description2'} src={Redux}/>
                    <Skill title={'Styled components'} description={'Modern and mobile-ready website that will help you reach all of your marketing.'} src={ReactSVG}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Skills;