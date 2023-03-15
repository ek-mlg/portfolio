import React from 'react';
import s from './Footer.module.css';
import Icons from "../Icons/Icons";

const Footer = () => {
    return (
        <div className={s.Footer}>
            <h2 className={s.Title}>Egor Kirillov</h2>
            <div className={s.Container}>
                <Icons src={""} alt={""}/>
                <Icons src={""} alt={""}/>
                <Icons src={""} alt={""}/>
                <Icons src={""} alt={""}/>
            </div>
            <h3 className={s.Copyright}>© 2023 All rights reserved</h3>
        </div>
    );
};

export default Footer;