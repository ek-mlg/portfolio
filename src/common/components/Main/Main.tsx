import React from 'react';
import s from './Main.module.scss';
import mainPhoto from '../../assets/image/photos/mainPhoto.jpg'


const Main = () => {
    return (
        <div className={s.MainBlock}>
            <div className={s.Text}>
                <h1 className={s.Title}>
                    Kirillov <br/>
                    <span className={s.SecondTitle}>Egor</span>
                </h1>
                <span className={s.Description}>Frontend Developer | React, Redux</span>
            </div>
            <img className={s.Photo} alt={"Main Photo"} src={mainPhoto}/>
        </div>
    );
};

export default Main;