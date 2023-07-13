import React from 'react';
import s from './Main.module.scss';
import mainPhoto from '../../assets/images/photos/mainPhoto.jpg'
import ReactTypingEffect from "react-typing-effect";

const Main = () => {
    return (
        <div className={s.MainBlock} id="main">
            <div className={s.Text}>
                    <h1 className={s.Title}>
                        Kirillov <br/>
                        <span className={s.SecondTitle}>Egor</span>
                    </h1>
                <ReactTypingEffect
                    className={s.Description}
                    staticText={"Frontend Developer |"}
                    text={["React", "Redux", "TypeScript"]}
                    eraseDelay={2500}
                    typingDelay={500}
                />

            </div>
                <img className={s.Photo} alt={"Main Photo"} src={mainPhoto}/>
        </div>
    );
};

export default Main;