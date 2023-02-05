import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.Footer}>
            <h2 className={s.Title}>Egor Kirillov</h2>
            <div className={s.Container}>
                <div className={s.Element}></div>
                <div className={s.Element}></div>
                <div className={s.Element}></div>
                <div className={s.Element}></div>
            </div>
            <h3 className={s.Copyright}>© 2023 All rights reserved</h3>
        </div>
    );
};

export default Footer;