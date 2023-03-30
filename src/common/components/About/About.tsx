import React from 'react';
import s from './About.module.scss';
import Title from "../Title/Title";
import Button from "../Button/Button";
import p from '../../assets/images/photos/secondPhoto.jpeg';
import {AttentionSeeker, Bounce, Fade, Slide} from "react-awesome-reveal";

const About = () => {
    return (
        <div className={s.AboutBlock} id="about">
            <div className={s.AboutContainer}>
                <div className={s.ImgContainer}>
                    <Fade duration={3000} triggerOnce={true} delay={-250} >
                        <img className={s.Img} alt={"Img"} src={p}/>
                    </Fade>
                </div>
                <div className={s.TextContainer}>
                    <AttentionSeeker effect={"pulse"} triggerOnce={true}>
                        <Title title={"Egor Kirillov"} second={"About"}/>
                    </AttentionSeeker>
                    <Slide direction={"right"} cascade={true} damping={0.1} triggerOnce={true} duration={400}>
                        <span className={s.SpanAbout}>Frontend Developer | React</span>
                    </Slide>
                    <AttentionSeeker effect={"pulse"} cascade={true} triggerOnce={true} duration={1000}>
                    <div className={s.Text}>

                            <p>
                                I'm considering office or remote work options.
                                My name is Bernard Sydney. I am a Web Developer, and I'm very passionate and dedicated
                                to my
                                work.
                            </p>
                            <p>
                                With 20 years experience as a professional Web developer, I have acquired the skills and
                                knowledge necessary to make your project a success. I enjoy every step of the design
                                process,
                                from discussion and collaboration.
                            </p>
                    </div>
                        <Button text={"Download CV"} href={"href"}/>
                </AttentionSeeker>
                </div>
            </div>
        </div>
    );
};

export default About;