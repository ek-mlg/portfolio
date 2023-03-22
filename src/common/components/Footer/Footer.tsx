import React from 'react';
import s from './Footer.module.scss';
import Icons from "../Icons/Icons";
import WhatsApp from "../../assets/image/icons/whatsapp.svg";
import In from "../../assets/image/icons/in.svg";
import Facebook from "../../assets/image/icons/facebook.svg";
import Telegram from "../../assets/image/icons/telegram.svg";
import GitHub from "../../assets/image/icons/github.svg";

const Footer = () => {

    const date = new Date()
    const yearDate = date.getFullYear()

    return (
        <div className={s.Footer}>
            <address className={s.FooterWrapper}>
                <div className={s.IconsContainer}>
                    <a href={"https://t.me/break_the_rules_eat_grasses"} target={"_blank"} rel={"noreferrer"}>
                        <Icons src={Telegram} alt={"Telegram"}/>
                    </a>
                    <a href={"https://wa.me/89190161763"} target={"_blank"} rel={"noreferrer"}>
                        <Icons src={WhatsApp} alt={"WhatsApp"}/>
                    </a>
                    <a href={"https://www.facebook.com/profile.php?id=100011402307623"} target={"_blank"} rel={"noreferrer"}>
                        <Icons src={Facebook} alt={"Facebook"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/ek-mlg"} target={"_blank"} rel={"noreferrer"}>
                        <Icons src={In} alt={"Linkedin"}/>
                    </a>
                    <a href={"https://github.com/ek-mlg"} target={"_blank"} rel={"noreferrer"}>
                        <Icons src={GitHub} alt={"GitHub"}/>
                    </a>
                </div>
                <div className={s.TextContainer}>
                    <span className={s.Title}>Egor Kirillov</span>
                    <span className={s.Title}>Frontend-developer</span>
                </div>
                <div className={s.TextContainer}>
                    <a className={s.Info} href={"mailto:ek.mlg@icloud.com"}>ek.mlg@icloud.com</a>
                    <a className={s.Info} href={"tel:+7 (919) 016-17-63"}>+7 (919) 016-17-63</a>
                </div>
                <div className={s.TextContainer}>
                    <span className={s.Copyright}>© {yearDate} All rights reserved</span>
                </div>
            </address>
        </div>
    );
};

export default Footer;