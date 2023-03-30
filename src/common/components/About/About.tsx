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
                    <Bounce triggerOnce={true} fraction={1}>
                        <span className={s.SpanAbout}>Frontend Developer | React</span>
                    </Bounce>
                    <div className={s.Text}>
                        <Slide direction={"right"} cascade damping={0.1} triggerOnce={true} delay={-250}>
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
                        </Slide>
                    </div>
                        <Button text={"Download CV"} href={"href"}/>
                </div>
            </div>
        </div>
    );
};

export default About;