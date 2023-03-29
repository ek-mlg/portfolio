import React from 'react';
import s from './About.module.scss';
import Title from "../Title/Title";
import Button from "../Button/Button";
import p from '../../assets/images/photos/secondPhoto.jpeg';
import {Bounce, Fade, Slide} from "react-awesome-reveal";

const About = () => {
    return (
        <div className={s.AboutBlock} id="about">
            <div className={s.AboutContainer}>
                <div className={s.ImgContainer}>
                    <Fade duration={3000} triggerOnce={true}>
                        <img className={s.Img} alt={"Img"} src={p}/>
                    </Fade>
                </div>
                <div className={s.TextContainer}>
                    <Fade direction={"down"} triggerOnce={true}>
                        <Title title={"Egor Kirillov"} second={"About"}/>
                    </Fade>
                    <Bounce triggerOnce={true}>
                        <span className={s.SpanAbout}>Frontend Developer | React</span>
                    </Bounce>
                    <div className={s.Text}>
                        <Slide direction={"right"} cascade damping={0.1} triggerOnce={true}>
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