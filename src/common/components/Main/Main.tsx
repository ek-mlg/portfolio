import React from 'react';
import s from './Main.module.scss';


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
            <div className={s.Photo}></div>
        </div>
    );
};

export default Main;