import React from 'react';
import s from './Main.module.css';


const Main = () => {
    return (
        <div className={s.MainBlock}>
            <div className={s.Container}>
                <div className={s.Text}>
                    <h1>I am Egor Kirillov</h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={s.Photo}></div>
            </div>
        </div>
    );
};

export default Main;