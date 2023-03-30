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
                    {/*<Zoom cascade={true} triggerOnce={true} duration={800} delay={-250}>
                        <Skill title={'TypeScript'} description={'test description1'} src={TS} alt={"TS"}/>
                        <Skill title={'Redux'}
                               description={'Experience with the Redux library, I understand its fundamental concepts: including state, actions, reducers and storage.'}
                               src={Redux} alt={"Redux"}/>
                        <Skill title={'React'}
                               description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
                               src={ReactSVG} alt={"React"}/>
                    </Zoom>*/}

                    {/*<Skill title={'CSS'} description={'test description1'} src={TS}/>
                    <Skill title={'SASS'} description={'test description2'} src={Redux}/>
                    <Skill title={'Styled components'} description={'Modern and mobile-ready website that will help you reach all of your marketing.'} src={ReactSVG}/>*/}

                </div>
            </div>
        </div>
    );
};

export default Skills;