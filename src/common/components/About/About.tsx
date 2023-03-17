import React from 'react';
import s from './About.module.scss';
import sContainer from '../../styles/Container.module.scss';
import Title from "../Title/Title";
import Button from "../Button/Button";
import p from '../../assets/image/photos/ava.jpeg';

const About = () => {
    return (
        <div className={s.AboutBlock}>
            <div className={`${sContainer.Container} ${s.AboutContainer}`}>

                <div className={s.ImgContainer}>
                    <img className={s.Img} alt={"Img"} src={p}/>
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
                    <Button/>
                </div>
            </div>
        </div>
    );
};

export default About;