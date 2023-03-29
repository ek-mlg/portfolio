import React from 'react';
import s from './Main.module.scss';
import mainPhoto from '../../assets/images/photos/mainPhoto.jpg'
import {Bounce, Fade} from "react-awesome-reveal";


const Main = () => {
    return (
        <div className={s.MainBlock}>
            <div className={s.Text}>
                <Bounce triggerOnce={true} duration={1500}>

                    <h1 className={s.Title}>
                        Kirillov <br/>
                        <span className={s.SecondTitle}>Egor</span>
                    </h1>
                </Bounce>
                <Fade direction={"up"} triggerOnce={true} duration={1200}>
                    <span className={s.Description}>Frontend Developer | React, Redux</span>

                </Fade>
            </div>
            <img className={s.Photo} alt={"Main Photo"} src={mainPhoto}/>
        </div>
    );
};

export default Main;