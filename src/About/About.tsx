import React from 'react';
import s from './About.module.css';
import sContainer from '../Common/Styles/Container.module.css';
import Title from "../Title/Title";

const About = () => {
    return (
        <div className={s.AboutBlock}>
            <div className={`${sContainer.Container} ${s.AboutContainer}`}>

                <div className={s.ImgContainer}>
                    <img/>
                </div>
                <div className={s.TextContainer}>
                    <Title title={"Egor Kirillov"} second={"About"}/>
                    <span className={s.SpanAbout}>Frontend Developer | React</span>

                    <div className={s.Text}>
                        <p>I'm considering office or remote work options.
                            My name is Bernard Sydney. I am a Web Developer, and I'm very passionate and dedicated to my
                            work.
                        </p>
                        <p>
                            With 20 years experience as a professional Web developer, I have acquired the skills and
                            knowledge necessary to make your project a success. I enjoy every step of the design
                            process,
                            from discussion and collaboration.
                        </p>
                    </div>
                    <button className={s.Button}>Button</button>
                </div>
            </div>
        </div>
    );
};

export default About;