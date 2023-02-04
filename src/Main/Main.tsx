import React from 'react';
import s from './Main.module.css';
import sContainer from '../Common/Styles/Container.module.css';


const Main = () => {
    return (
        <div className={s.MainBlock}>
            <div className={`${sContainer.Container} ${s.Container}`}>
                <div className={s.Text}>
                    <span>Hi there</span>
                    <h1>I am Egor Kirillov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.Photo}></div>
            </div>
        </div>
    );
};

export default Main;