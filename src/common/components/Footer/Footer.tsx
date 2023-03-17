import React from 'react';
import s from './Footer.module.scss';
import Icons from "../Icons/Icons";

const Footer = () => {

    const date = new Date()
    const yearDate = date.getFullYear()

    return (
        <div className={s.Footer}>
            <div className={s.FooterWrapper}>
                <div className={s.Container}>
                    <Icons src={""} alt={"VK"}/>
                    <Icons src={""} alt={"Facebook"}/>
                    <Icons src={""} alt={"Insta"}/>
                    <Icons src={""} alt={"Discord"}/>
                </div>
                <div className={s.TextContainer}>
                    <span className={s.Title}>Egor Kirillov</span>
                    <span className={s.Title}>Frontend-developer</span>
                </div>
                <div className={s.TextContainer}>
                    <a className={s.Info} href={"mailto:ek.mlg@yandex.ru"}>ek.mlg@yandex.ru</a>
                    <a className={s.Info} href={"tel:+7 (919) 016-17-63"}>+7 (919) 016-17-63</a>
                </div>
                <div className={s.TextContainer}>
                    <span className={s.Copyright}>© {yearDate} All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;