import React from 'react';
import s from './Skills.module.scss';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import TS from '../../assets/images/icons/ts.svg';
import Redux from '../../assets/images/icons/redux.svg';
import ReactSVG from '../../assets/images/icons/react.svg';
import {Fade, Zoom} from "react-awesome-reveal";

const Skills = () => {
    return (
        <div className={s.SkillsBlock}>
            <div className={s.SkillsContainer}>
                <Fade direction={"down"} triggerOnce={true}>
                    <Title title={"Skills &"} second={"Abilities"}/>
                </Fade>
                <div className={s.Skills}>
                    <Zoom cascade={true} triggerOnce={true} duration={800}>
                        <Skill title={'TypeScript'} description={'test description1'} src={TS} alt={"TS"}/>
                        <Skill title={'Redux'}
                               description={'Experience with the Redux library, I understand its fundamental concepts: including state, actions, reducers and storage.'}
                               src={Redux} alt={"Redux"}/>
                        <Skill title={'React'}
                               description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
                               src={ReactSVG} alt={"React"}/>
                    </Zoom>
                    {/*<Skill title={'CSS'} description={'test description1'} src={TS}/>
                    <Skill title={'SASS'} description={'test description2'} src={Redux}/>
                    <Skill title={'Styled components'} description={'Modern and mobile-ready website that will help you reach all of your marketing.'} src={ReactSVG}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Skills;