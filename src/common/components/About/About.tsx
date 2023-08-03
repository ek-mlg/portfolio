import React from 'react';
import s from './About.module.scss';
import Title from "../Title/Title";
import Button from "../Button/Button";
import p from '../../assets/images/photos/secondPhoto.jpeg';
import {Tilt} from "react-tilt";
import {options} from "../../../data";

const About = () => {

    return (
        <div className={s.AboutBlock} id="about">
            <div className={s.AboutContainer}>
                <div className={s.ImgContainer}>
                    <Tilt options={options} className={s.Tilt}>
                        <img className={s.Img} alt={"My main photo"} src={p}/>
                    </Tilt>
                </div>
                <div className={s.TextContainer}>
                        <Title title={"Egor Kirillov"} second={"About"}/>
                        <span className={s.SpanAbout}>Frontend Developer | React</span>
                    <div className={s.Text}>
                            <p>
                                I'm considering office or remote work options. My name is Egor Kirillov. I am a Front-end Developer, and I'm very passionate and dedicated to my work.
                            </p>
                            <p>
                                For more than 1 year, I have been developing modern library web applications using React on an ongoing basis. I am constantly improving my knowledge and knowledge by developing opportunities in this area. I believe that our cooperation with you gives a positive result to both parties!
                            </p>
                    </div>
                        <Button text={"Download CV"} href={'href'}/>
                </div>
            </div>
        </div>
    );
};

export default About;